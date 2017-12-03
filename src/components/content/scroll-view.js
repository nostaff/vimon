import { isBoolean, isNumber, isPresent, registerListener, pointerCoord } from '../../utils/utils'

const SCROLL_END_DEBOUNCE_MS = 80;
const MIN_VELOCITY_START_DECELERATION = 4;
const MIN_VELOCITY_CONTINUE_DECELERATION = 0.12;
const DECELERATION_FRICTION = 0.97;
const FRAME_MS = (1000 / 60);
const EVENT_OPTS = {
    passive: true,
    zone: false
};


export class ScrollView {

    constructor() {
        this.ev = null;
        this.isScrolling = false;
        this.onScrollStart = (ev) => (ev) => {};
        this.onScroll = (ev) => (ev) => {};
        this.onScrollEnd = (ev) => (ev) => {};
        this.initialized = false;

        this._el = null;
        this._eventsEnabled = false;
        this._js = false;
        this._t = 0;
        this._l = 0;
        this._lsn = null;
        this._endTmr = null;
        this._transform = 'transform'

        this.ev = {
            timeStamp: 0,
            scrollTop: 0,
            scrollLeft: 0,
            scrollHeight: 0,
            scrollWidth: 0,
            contentHeight: 0,
            contentWidth: 0,
            contentTop: 0,
            contentBottom: 0,
            startY: 0,
            startX: 0,
            deltaY: 0,
            deltaX: 0,
            velocityY: 0,
            velocityX: 0,
            directionY: 'down',
            directionX: null,
            contentElement: null,
            fixedElement: null,
            scrollElement: null,
            headerElement: null,
            footerElement: null,
        };
    }

    init(ele, contentTop, contentBottom) {
        console.assert(ele, 'scroll-view, element can not be null');
        this._el = ele;
        if (!this.initialized) {
            this.initialized = true;
            if (this._js) {
                this.enableJsScroll(contentTop, contentBottom);
            } else {
                this.enableNativeScrolling();
            }
        }
    }

    setScrolling(isScrolling, ev) {
        if (this.isScrolling) {
            if (isScrolling) {
                this.onScroll && this.onScroll(ev);
            } else {
                this.isScrolling = false;
                this.onScrollEnd && this.onScrollEnd(ev);
            }
        } else if (isScrolling) {
            this.isScrolling = true;
            this.onScrollStart && this.onScrollStart(ev);
        }
    }

    enableNativeScrolling() {
        console.assert(this.onScrollStart, 'onScrollStart is not defined');
        console.assert(this.onScroll, 'onScroll is not defined');
        console.assert(this.onScrollEnd, 'onScrollEnd is not defined');

        this._js = false;
        if (!this._el) {
            return;
        }

        console.debug(`ScrollView, enableNativeScrolling`);

        const self = this;
        const ev = self.ev;
        const positions = [];

        function scrollCallback(scrollEvent) {
            // remind the app that it's currently scrolling
            // TODO
            // self._app.setScrolling();

            ev.timeStamp = scrollEvent.timeStamp;

            // Event.timeStamp is 0 in firefox
            if (!ev.timeStamp) {
                ev.timeStamp = Date.now();
            }

            // get the current scrollTop
            // ******** DOM READ ****************
            ev.scrollTop = self.getTop();

            // get the current scrollLeft
            // ******** DOM READ ****************
            ev.scrollLeft = self.getLeft();

            if (!self.isScrolling) {
                // remember the start positions
                ev.startY = ev.scrollTop;
                ev.startX = ev.scrollLeft;

                // new scroll, so do some resets
                ev.velocityY = ev.velocityX = 0;
                ev.deltaY = ev.deltaX = 0;
                positions.length = 0;
            }

            // actively scrolling
            positions.push(ev.scrollTop, ev.scrollLeft, ev.timeStamp);

            if (positions.length > 3) {
                // we've gotten at least 2 scroll events so far
                ev.deltaY = (ev.scrollTop - ev.startY);
                ev.deltaX = (ev.scrollLeft - ev.startX);

                var endPos = (positions.length - 1);
                var startPos = endPos;
                var timeRange = (ev.timeStamp - 100);

                // move pointer to position measured 100ms ago
                for (var i = endPos; i > 0 && positions[i] > timeRange; i -= 3) {
                    startPos = i;
                }

                if (startPos !== endPos) {
                    // compute relative movement between these two points
                    var movedTop = (positions[startPos - 2] - positions[endPos - 2]);
                    var movedLeft = (positions[startPos - 1] - positions[endPos - 1]);
                    var factor = FRAME_MS / (positions[endPos] - positions[startPos]);
                    // based on XXms compute the movement to apply for each render step
                    ev.velocityY = movedTop * factor;
                    ev.velocityX = movedLeft * factor;

                    // figure out which direction we're scrolling
                    ev.directionY = (movedTop > 0 ? 'up' : 'down');
                    ev.directionX = (movedLeft > 0 ? 'left' : 'right');
                }
            }

            function scrollEnd() {
                // reset velocity, do not reset the directions or deltas
                ev.velocityY = ev.velocityX = 0;

                // emit that the scroll has ended
                self.setScrolling(false, ev);

                self._endTmr = null;
            }

            // emit on each scroll event
            self.setScrolling(true, ev);

            // debounce for a moment after the last scroll event
            window.clearTimeout(self._endTmr)
            self._endTmr = window.setTimeout(scrollEnd, SCROLL_END_DEBOUNCE_MS)
        }

        // clear out any existing listeners (just to be safe)
        self._lsn && self._lsn();

        // assign the raw scroll listener
        // note that it does not have a wrapping requestAnimationFrame on purpose
        // a scroll event callback will always be right before the raf callback
        // so there's little to no value of using raf here since it'll all ways immediately
        // call the raf if it was set within the scroll event, so this will save us some time
        // self._lsn = self._plt.registerListener(self._el, 'scroll', scrollCallback, EVENT_OPTS);
        self._lsn = registerListener(self._el, 'scroll', scrollCallback, EVENT_OPTS)
    }

    /**
     * @hidden
     * JS Scrolling has been provided only as a temporary solution
     * until iOS apps can take advantage of scroll events at all times.
     * The goal is to eventually remove JS scrolling entirely. When we
     * no longer have to worry about iOS not firing scroll events during
     * inertia then this can be burned to the ground. iOS's more modern
     * WKWebView does not have this issue, only UIWebView does.
     */
    enableJsScroll(contentTop, contentBottom) {
        const self = this;
        self._js = true;
        const ele = self._el;

        if (!ele) {
            return;
        }

        console.debug(`ScrollView, enableJsScroll`);

        const ev = self.ev;
        const positions = [];
        let rafCancel = null;
        let max;

        function setMax() {
            if (!max) {
                // ******** DOM READ ****************
                max = ele.scrollHeight - ele.parentElement.offsetHeight + contentTop + contentBottom;
            }
        }

        function jsScrollDecelerate(timeStamp) {
            ev.timeStamp = timeStamp;

            console.debug(`scroll-view, decelerate, velocity: ${ev.velocityY}`);

            if (ev.velocityY) {
                ev.velocityY *= DECELERATION_FRICTION;

                // update top with updated velocity
                // clamp top within scroll limits
                // ******** DOM READ ****************
                setMax();
                self._t = Math.min(Math.max(self._t + ev.velocityY, 0), max);

                ev.scrollTop = self._t;

                // emit on each scroll event
                self.onScroll(ev);

                window.setTimeout(() => {
                    // ******** DOM WRITE ****************
                    self.setTop(self._t);

                    if (self._t > 0 && self._t < max && Math.abs(ev.velocityY) > MIN_VELOCITY_CONTINUE_DECELERATION) {
                        rafCancel = window.setTimeout((rafTimeStamp) => {
                            jsScrollDecelerate(rafTimeStamp);
                        });

                    } else {
                        // haven't scrolled in a while, so it's a scrollend
                        self.isScrolling = false;

                        // reset velocity, do not reset the directions or deltas
                        ev.velocityY = ev.velocityX = 0;

                        // emit that the scroll has ended
                        self.onScrollEnd(ev);
                    }
                });
            }
        }

        function jsScrollTouchStart(touchEvent) {
            positions.length = 0;
            max = null;
            window.clearTimeout(rafCancel)
            positions.push(pointerCoord(touchEvent).y, touchEvent.timeStamp);
        }

        function jsScrollTouchMove(touchEvent) {
            if (!positions.length) {
                return;
            }

            ev.timeStamp = touchEvent.timeStamp;

            var y = pointerCoord(touchEvent).y;

            // ******** DOM READ ****************
            setMax();
            self._t -= (y - positions[positions.length - 2]);
            self._t = Math.min(Math.max(self._t, 0), max);

            positions.push(y, ev.timeStamp);

            if (!self.isScrolling) {
                // remember the start position
                ev.startY = self._t;

                // new scroll, so do some resets
                ev.velocityY = ev.deltaY = 0;

                self.isScrolling = true;

                // emit only on the first scroll event
                self.onScrollStart(ev);
            }

            window.setTimeout(() => {
                // ******** DOM WRITE ****************
                self.setTop(self._t);
            });
        }

        function jsScrollTouchEnd(touchEvent) {
            // figure out what the scroll position was about 100ms ago
            window.clearTimeout(rafCancel)

            if (!positions.length && self.isScrolling) {
                self.isScrolling = false;
                ev.velocityY = ev.velocityX = 0;
                self.onScrollEnd(ev);
                return;
            }

            var y = pointerCoord(touchEvent).y;

            positions.push(y, touchEvent.timeStamp);

            var endPos = (positions.length - 1);
            var startPos = endPos;
            var timeRange = (touchEvent.timeStamp - 100);

            // move pointer to position measured 100ms ago
            for (var i = endPos; i > 0 && positions[i] > timeRange; i -= 2) {
                startPos = i;
            }

            if (startPos !== endPos) {
                // compute relative movement between these two points
                var timeOffset = (positions[endPos] - positions[startPos]);
                var movedTop = (positions[startPos - 1] - positions[endPos - 1]);

                // based on XXms compute the movement to apply for each render step
                ev.velocityY = ((movedTop / timeOffset) * FRAME_MS);

                // verify that we have enough velocity to start deceleration
                if (Math.abs(ev.velocityY) > MIN_VELOCITY_START_DECELERATION) {
                    // ******** DOM READ ****************
                    setMax();

                    rafCancel = window.setTimeout((rafTimeStamp) => {
                        jsScrollDecelerate(rafTimeStamp);
                    });
                }

            } else {
                self.isScrolling = false;
                ev.velocityY = 0;
                self.onScrollEnd(ev);
            }

            positions.length = 0;
        }

        const unRegStart = registerListener(ele, 'touchstart', jsScrollTouchStart, EVENT_OPTS);
        const unRegMove = registerListener(ele, 'touchmove', jsScrollTouchMove, EVENT_OPTS);
        const unRegEnd = registerListener(ele, 'touchend', jsScrollTouchEnd, EVENT_OPTS);

        ele.parentElement.classList.add('js-scroll');

        // stop listening for actual scroll events
        self._lsn && self._lsn();

        // create an unregister for all of these events
        self._lsn = () => {
            unRegStart();
            unRegMove();
            unRegEnd();
            ele.parentElement.classList.remove('js-scroll');
        };
    }


    /**
     * DOM READ
     */
    getTop() {
        if (this._js) {
            return this._t;
        }
        return this._t = this._el.scrollTop;
    }

    /**
     * DOM READ
     */
    getLeft() {
        if (this._js) {
            return 0;
        }
        return this._l = this._el.scrollLeft;
    }

    /**
     * DOM WRITE
     */
    setTop(top) {
        this._t = top;

        if (this._js) {
            (this._el.style)[this._transform] = `translate3d(${this._l * -1}px,${top * -1}px,0px)`;
        } else {
            this._el.scrollTop = top;
        }
    }

    /**
     * DOM WRITE
     */
    setLeft(left) {
        this._l = left;

        if (this._js) {
            (this._el.style)[this._transform] = `translate3d(${left * -1}px,${this._t * -1}px,0px)`;
        } else {
            this._el.scrollLeft = left;
        }
    }

    scrollTo(x, y, duration, done) {
        // scroll animation loop w/ easing
        // credit https://gist.github.com/dezinezync/5487119

        let promise;
        if (done === undefined) {
            // only create a promise if a done callback wasn't provided
            // done can be a null, which avoids any functions
            promise = new Promise(resolve => {
                done = resolve;
            });
        }

        const self = this;
        const el = self._el;
        if (!el) {
            // invalid element
            done();
            return promise;
        }

        if (duration < 32) {
            self.setTop(y);
            self.setLeft(x);
            done();
            return promise;
        }

        const fromY = el.scrollTop;
        const fromX = el.scrollLeft;

        const maxAttempts = (duration / 16) + 100;
        const transform =  this._transform;

        let startTime;
        let attempts = 0;
        let stopScroll = false;

        // scroll loop
        function step(timeStamp) {
            attempts++;

            if (!self._el || stopScroll || attempts > maxAttempts) {
                self.setScrolling(false, null);
                (el.style)[transform] = '';
                done();
                return;
            }

            let time = Math.min(1, ((timeStamp - startTime) / duration));

            // where .5 would be 50% of time on a linear scale easedT gives a
            // fraction based on the easing method
            let easedT = (--time) * time * time + 1;

            if (fromY !== y) {
                self.setTop((easedT * (y - fromY)) + fromY);
            }

            if (fromX !== x) {
                self.setLeft(Math.floor((easedT * (x - fromX)) + fromX));
            }

            if (easedT < 1) {
                // do not use DomController here
                // must use nativeRaf in order to fire in the next frame
                window.requestAnimationFrame(step)


            } else {
                stopScroll = true;
                self.setScrolling(false, null);
                (el.style)[transform] = '';
                done();
            }
        }

        // start scroll loop
        self.setScrolling(true, null);
        self.isScrolling = true;

        // chill out for a frame first
        window.setTimeout(timeStamp => {
            startTime = timeStamp;
            step(timeStamp);
        }, 16);

        return promise;
    }

    scrollToTop(duration) {
        return this.scrollTo(0, 0, duration);
    }

    scrollToBottom(duration) {
        let y = 0;
        if (this._el) {
            y = this._el.scrollHeight - this._el.clientHeight;
        }
        return this.scrollTo(0, y, duration);
    }

    stop() {
        this.setScrolling(false, null);
    }

    /**
     * @hidden
     */
    destroy() {
        this.stop();

        this._endTmr && window.clearTimeout(this._endTmr);
        this._lsn && this._lsn();

        let ev = this.ev;
        ev.contentElement = ev.fixedElement = ev.scrollElement = ev.headerElement = null;
        this._lsn = this._el = this.ev = ev = null;
        this.onScrollStart = this.onScroll = this.onScrollEnd = null;
    }
}
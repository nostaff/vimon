webpackJsonp([34],{400:function(t,e,n){"use strict";var o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable;t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(t){o[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(i){return!1}}()?Object.assign:function(t,e){for(var n,a,r=function(t){if(null===t||t===undefined)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}(t),A=1;A<arguments.length;A++){n=Object(arguments[A]);for(var c in n)i.call(n,c)&&(r[c]=n[c]);if(o){a=o(n);for(var b=0;b<a.length;b++)s.call(n,a[b])&&(r[a[b]]=n[a[b]])}}return r}},401:function(t,e,n){"use strict";var o=n(48),i=n(18),s=n(12),a=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}();var r=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._component=e,this._position=n||null,this._ins=null}return a(t,[{key:"isPresentHandled",value:function(t){return!1}},{key:"isDismissHandled",value:function(t){return!1}},{key:"normalizeOptions",value:function(t){var e=Array.prototype.slice.call(arguments);return Object(s.o)(e[0])?e[0]:{}}},{key:"getInstance",value:function(){return this._ins}},{key:"generateInstance",value:function(t){var e=Object(i.e)(this._position).appendChild(document.createElement("div")),n=new(o.a.extend(this._component))({$data:t});return n.$mount(e),n}},{key:"present",value:function(){var t=this,e=this.normalizeOptions.apply(this,arguments);return new Promise(function(n){t.isPresentHandled(e)?n():t._ins&&t._ins.isActive?t._ins.dismiss().then(function(){t._ins=t.generateInstance(e),t._ins.present().then(function(){return n()})}):(t._ins=t.generateInstance(e),t._ins.present().then(function(){return n()}))})}},{key:"dismiss",value:function(){var t=this;return new Promise(function(e){t.isDismissHandled()?e():t._ins&&t._ins.isActive?t._ins.dismiss().then(function(){t._ins=null,e()}):(t._ins=null,e())})}}]),t}();e.a=r},539:function(t,e,n){var o=n(540);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n(398)("d4550088",o,!0)},540:function(t,e,n){(t.exports=n(397)(!0)).push([t.i,".ion-toast{left:0;top:0;position:absolute;z-index:1000;display:block;width:100%;height:100%;pointer-events:none;contain:strict}.toast-container{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;pointer-events:auto;contain:content}.toast-button{padding:19px 16px 17px;font-size:1.5rem}.toast-message{-webkit-box-flex:1;-ms-flex:1;flex:1}.toast-ios .toast-wrapper{left:10px;right:10px;margin:auto;border-radius:.65rem;position:absolute;z-index:10;display:block;max-width:700px;background:rgba(0,0,0,.9)}.toast-ios .toast-wrapper.toast-top{margin:constant(safe-area-inset-top) auto auto;margin:env(safe-area-inset-top) auto auto;top:10px}.toast-ios .toast-wrapper.toast-bottom{margin:auto auto constant(safe-area-inset-bottom);margin:auto auto env(safe-area-inset-bottom);bottom:10px}.toast-ios .toast-wrapper.toast-middle{top:38%;opacity:1}.toast-ios .toast-message{font-size:1.4rem;color:#fff;padding:1.5rem}.toast-md .toast-wrapper{left:0;right:0;margin:auto;position:absolute;z-index:10;display:block;width:100%;max-width:700px;background:#333}.toast-md .toast-wrapper.toast-top{top:0}.toast-md .toast-wrapper.toast-bottom{bottom:0}.toast-md .toast-wrapper.toast-middle{top:38%;opacity:1}.toast-md .toast-message{font-size:1.5rem;color:#fff;padding:19px 16px 17px}.ios .toast-fade-top-enter-active,.ios .toast-fade-top-leave-active{-webkit-transition:-webkit-transform .4s cubic-bezier(.36,.66,.04,1);transition:-webkit-transform .4s cubic-bezier(.36,.66,.04,1);transition:transform .4s cubic-bezier(.36,.66,.04,1);transition:transform .4s cubic-bezier(.36,.66,.04,1),-webkit-transform .4s cubic-bezier(.36,.66,.04,1);ransform:translateY(10px);opacity:1}.ios .toast-fade-top-enter,.ios .toast-fade-top-leave-to{-webkit-transition:-webkit-transform .3s cubic-bezier(.36,.66,.04,1);transition:-webkit-transform .3s cubic-bezier(.36,.66,.04,1);transition:transform .3s cubic-bezier(.36,.66,.04,1);transition:transform .3s cubic-bezier(.36,.66,.04,1),-webkit-transform .3s cubic-bezier(.36,.66,.04,1);-webkit-transform:translateY(-100%);transform:translateY(-100%);opacity:0}.ios .toast-fade-bottom-enter-active,.ios .toast-fade-bottom-leave-active{-webkit-transition:-webkit-transform .4s cubic-bezier(.36,.66,.04,1);transition:-webkit-transform .4s cubic-bezier(.36,.66,.04,1);transition:transform .4s cubic-bezier(.36,.66,.04,1);transition:transform .4s cubic-bezier(.36,.66,.04,1),-webkit-transform .4s cubic-bezier(.36,.66,.04,1);ransform:translateY(10px)}.ios .toast-fade-bottom-enter,.ios .toast-fade-bottom-leave-to{-webkit-transition:-webkit-transform .3s cubic-bezier(.36,.66,.04,1);transition:-webkit-transform .3s cubic-bezier(.36,.66,.04,1);transition:transform .3s cubic-bezier(.36,.66,.04,1);transition:transform .3s cubic-bezier(.36,.66,.04,1),-webkit-transform .3s cubic-bezier(.36,.66,.04,1);-webkit-transform:translateY(100%);transform:translateY(100%);opacity:0}.ios .toast-fade-bottom-enter-active,.ios .toast-fade-bottom-leave-active{opacity:1}.ios .toast-fade-bottom-enter,.ios .toast-fade-bottom-leave-to{opacity:.01}.md .toast-fade-top-enter-active,.md .toast-fade-top-leave-active{-webkit-transition:-webkit-transform .4s cubic-bezier(.36,.66,.04,1);transition:-webkit-transform .4s cubic-bezier(.36,.66,.04,1);transition:transform .4s cubic-bezier(.36,.66,.04,1);transition:transform .4s cubic-bezier(.36,.66,.04,1),-webkit-transform .4s cubic-bezier(.36,.66,.04,1);ransform:translateY(10px);opacity:1}.md .toast-fade-top-enter,.md .toast-fade-top-leave-to{-webkit-transition:-webkit-transform .3s cubic-bezier(.36,.66,.04,1);transition:-webkit-transform .3s cubic-bezier(.36,.66,.04,1);transition:transform .3s cubic-bezier(.36,.66,.04,1);transition:transform .3s cubic-bezier(.36,.66,.04,1),-webkit-transform .3s cubic-bezier(.36,.66,.04,1);-webkit-transform:translateY(-100%);transform:translateY(-100%);opacity:0}.md .toast-fade-bottom-enter-active,.md .toast-fade-bottom-leave-active{-webkit-transition:-webkit-transform .4s cubic-bezier(.36,.66,.04,1);transition:-webkit-transform .4s cubic-bezier(.36,.66,.04,1);transition:transform .4s cubic-bezier(.36,.66,.04,1);transition:transform .4s cubic-bezier(.36,.66,.04,1),-webkit-transform .4s cubic-bezier(.36,.66,.04,1);ransform:translateY(10px)}.md .toast-fade-bottom-enter,.md .toast-fade-bottom-leave-to{-webkit-transition:-webkit-transform .3s cubic-bezier(.36,.66,.04,1);transition:-webkit-transform .3s cubic-bezier(.36,.66,.04,1);transition:transform .3s cubic-bezier(.36,.66,.04,1);transition:transform .3s cubic-bezier(.36,.66,.04,1),-webkit-transform .3s cubic-bezier(.36,.66,.04,1);-webkit-transform:translateY(100%);transform:translateY(100%);opacity:0}.md .toast-fade-bottom-enter-active,.md .toast-fade-bottom-leave-active{opacity:1}.md .toast-fade-bottom-enter,.md .toast-fade-bottom-leave-to{opacity:.01}","",{version:3,sources:["/Volumes/Data/Users/Eric/Develop/Repository/Vimon/src/components/toast/toast.vue"],names:[],mappings:"AACA,WACE,OAAQ,AACR,MAAO,AACP,kBAAmB,AACnB,aAAc,AACd,cAAe,AACf,WAAY,AACZ,YAAa,AACb,oBAAqB,AACrB,cAAgB,CACjB,AACD,iBACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,yBAA0B,AACtB,sBAAuB,AACnB,mBAAoB,AAC5B,oBAAqB,AACrB,eAAiB,CAClB,AACD,cACE,uBAAwB,AACxB,gBAAkB,CACnB,AACD,eACE,mBAAoB,AAChB,WAAY,AACR,MAAQ,CACjB,AACD,0BACE,UAAW,AACX,WAAY,AACZ,YAAa,AACb,qBAAuB,AACvB,kBAAmB,AACnB,WAAY,AACZ,cAAe,AACf,gBAAiB,AACjB,yBAA+B,CAChC,AACD,oCACE,+CAAgD,AAChD,0CAA2C,AAC3C,QAAU,CACX,AACD,uCACE,kDAAmD,AACnD,6CAA8C,AAC9C,WAAa,CACd,AACD,uCACE,QAAS,AACT,SAAW,CACZ,AACD,0BACE,iBAAkB,AAClB,WAAY,AACZ,cAAgB,CACjB,AACD,yBACE,OAAQ,AACR,QAAS,AACT,YAAa,AACb,kBAAmB,AACnB,WAAY,AACZ,cAAe,AACf,WAAY,AACZ,gBAAiB,AACjB,eAAiB,CAClB,AACD,mCACE,KAAO,CACR,AACD,sCACE,QAAU,CACX,AACD,sCACE,QAAS,AACT,SAAW,CACZ,AACD,yBACE,iBAAkB,AAClB,WAAY,AACZ,sBAAwB,CACzB,AACD,oEACE,qEAA6E,AAC7E,6DAAqE,AACrE,qDAA6D,AAC7D,uGAAuH,AACvH,0BAA2B,AAC3B,SAAW,CACZ,AACD,yDACE,qEAA6E,AAC7E,6DAAqE,AACrE,qDAA6D,AAC7D,uGAAuH,AACvH,oCAAqC,AAC7B,4BAA6B,AACrC,SAAW,CACZ,AACD,0EACE,qEAA6E,AAC7E,6DAAqE,AACrE,qDAA6D,AAC7D,uGAAuH,AACvH,yBAA2B,CAE5B,AACD,+DACE,qEAA6E,AAC7E,6DAAqE,AACrE,qDAA6D,AAC7D,uGAAuH,AACvH,mCAAoC,AAC5B,2BAA4B,AACpC,SAAW,CACZ,AACD,0EACE,SAAW,CACZ,AACD,+DACE,WAAc,CACf,AACD,kEACE,qEAA6E,AAC7E,6DAAqE,AACrE,qDAA6D,AAC7D,uGAAuH,AACvH,0BAA2B,AAC3B,SAAW,CACZ,AACD,uDACE,qEAA6E,AAC7E,6DAAqE,AACrE,qDAA6D,AAC7D,uGAAuH,AACvH,oCAAqC,AAC7B,4BAA6B,AACrC,SAAW,CACZ,AACD,wEACE,qEAA6E,AAC7E,6DAAqE,AACrE,qDAA6D,AAC7D,uGAAuH,AACvH,yBAA2B,CAE5B,AACD,6DACE,qEAA6E,AAC7E,6DAAqE,AACrE,qDAA6D,AAC7D,uGAAuH,AACvH,mCAAoC,AAC5B,2BAA4B,AACpC,SAAW,CACZ,AACD,wEACE,SAAW,CACZ,AACD,6DACE,WAAc,CACf",file:"toast.vue",sourcesContent:["\n.ion-toast {\n  left: 0;\n  top: 0;\n  position: absolute;\n  z-index: 1000;\n  display: block;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  contain: strict;\n}\n.toast-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  pointer-events: auto;\n  contain: content;\n}\n.toast-button {\n  padding: 19px 16px 17px;\n  font-size: 1.5rem;\n}\n.toast-message {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n.toast-ios .toast-wrapper {\n  left: 10px;\n  right: 10px;\n  margin: auto;\n  border-radius: 0.65rem;\n  position: absolute;\n  z-index: 10;\n  display: block;\n  max-width: 700px;\n  background: rgba(0, 0, 0, 0.9);\n}\n.toast-ios .toast-wrapper.toast-top {\n  margin: constant(safe-area-inset-top) auto auto;\n  margin: env(safe-area-inset-top) auto auto;\n  top: 10px;\n}\n.toast-ios .toast-wrapper.toast-bottom {\n  margin: auto auto constant(safe-area-inset-bottom);\n  margin: auto auto env(safe-area-inset-bottom);\n  bottom: 10px;\n}\n.toast-ios .toast-wrapper.toast-middle {\n  top: 38%;\n  opacity: 1;\n}\n.toast-ios .toast-message {\n  font-size: 1.4rem;\n  color: #fff;\n  padding: 1.5rem;\n}\n.toast-md .toast-wrapper {\n  left: 0;\n  right: 0;\n  margin: auto;\n  position: absolute;\n  z-index: 10;\n  display: block;\n  width: 100%;\n  max-width: 700px;\n  background: #333;\n}\n.toast-md .toast-wrapper.toast-top {\n  top: 0;\n}\n.toast-md .toast-wrapper.toast-bottom {\n  bottom: 0;\n}\n.toast-md .toast-wrapper.toast-middle {\n  top: 38%;\n  opacity: 1;\n}\n.toast-md .toast-message {\n  font-size: 1.5rem;\n  color: #fff;\n  padding: 19px 16px 17px;\n}\n.ios .toast-fade-top-enter-active, .ios .toast-fade-top-leave-active {\n  -webkit-transition: -webkit-transform 0.4s cubic-bezier(0.36, 0.66, 0.04, 1);\n  transition: -webkit-transform 0.4s cubic-bezier(0.36, 0.66, 0.04, 1);\n  transition: transform 0.4s cubic-bezier(0.36, 0.66, 0.04, 1);\n  transition: transform 0.4s cubic-bezier(0.36, 0.66, 0.04, 1), -webkit-transform 0.4s cubic-bezier(0.36, 0.66, 0.04, 1);\n  ransform: translateY(10px);\n  opacity: 1;\n}\n.ios .toast-fade-top-enter, .ios .toast-fade-top-leave-to {\n  -webkit-transition: -webkit-transform 0.3s cubic-bezier(0.36, 0.66, 0.04, 1);\n  transition: -webkit-transform 0.3s cubic-bezier(0.36, 0.66, 0.04, 1);\n  transition: transform 0.3s cubic-bezier(0.36, 0.66, 0.04, 1);\n  transition: transform 0.3s cubic-bezier(0.36, 0.66, 0.04, 1), -webkit-transform 0.3s cubic-bezier(0.36, 0.66, 0.04, 1);\n  -webkit-transform: translateY(-100%);\n          transform: translateY(-100%);\n  opacity: 0;\n}\n.ios .toast-fade-bottom-enter-active, .ios .toast-fade-bottom-leave-active {\n  -webkit-transition: -webkit-transform 0.4s cubic-bezier(0.36, 0.66, 0.04, 1);\n  transition: -webkit-transform 0.4s cubic-bezier(0.36, 0.66, 0.04, 1);\n  transition: transform 0.4s cubic-bezier(0.36, 0.66, 0.04, 1);\n  transition: transform 0.4s cubic-bezier(0.36, 0.66, 0.04, 1), -webkit-transform 0.4s cubic-bezier(0.36, 0.66, 0.04, 1);\n  ransform: translateY(10px);\n  opacity: 1;\n}\n.ios .toast-fade-bottom-enter, .ios .toast-fade-bottom-leave-to {\n  -webkit-transition: -webkit-transform 0.3s cubic-bezier(0.36, 0.66, 0.04, 1);\n  transition: -webkit-transform 0.3s cubic-bezier(0.36, 0.66, 0.04, 1);\n  transition: transform 0.3s cubic-bezier(0.36, 0.66, 0.04, 1);\n  transition: transform 0.3s cubic-bezier(0.36, 0.66, 0.04, 1), -webkit-transform 0.3s cubic-bezier(0.36, 0.66, 0.04, 1);\n  -webkit-transform: translateY(100%);\n          transform: translateY(100%);\n  opacity: 0;\n}\n.ios .toast-fade-bottom-enter-active, .ios .toast-fade-bottom-leave-active {\n  opacity: 1;\n}\n.ios .toast-fade-bottom-enter, .ios .toast-fade-bottom-leave-to {\n  opacity: 0.01;\n}\n.md .toast-fade-top-enter-active, .md .toast-fade-top-leave-active {\n  -webkit-transition: -webkit-transform 0.4s cubic-bezier(0.36, 0.66, 0.04, 1);\n  transition: -webkit-transform 0.4s cubic-bezier(0.36, 0.66, 0.04, 1);\n  transition: transform 0.4s cubic-bezier(0.36, 0.66, 0.04, 1);\n  transition: transform 0.4s cubic-bezier(0.36, 0.66, 0.04, 1), -webkit-transform 0.4s cubic-bezier(0.36, 0.66, 0.04, 1);\n  ransform: translateY(10px);\n  opacity: 1;\n}\n.md .toast-fade-top-enter, .md .toast-fade-top-leave-to {\n  -webkit-transition: -webkit-transform 0.3s cubic-bezier(0.36, 0.66, 0.04, 1);\n  transition: -webkit-transform 0.3s cubic-bezier(0.36, 0.66, 0.04, 1);\n  transition: transform 0.3s cubic-bezier(0.36, 0.66, 0.04, 1);\n  transition: transform 0.3s cubic-bezier(0.36, 0.66, 0.04, 1), -webkit-transform 0.3s cubic-bezier(0.36, 0.66, 0.04, 1);\n  -webkit-transform: translateY(-100%);\n          transform: translateY(-100%);\n  opacity: 0;\n}\n.md .toast-fade-bottom-enter-active, .md .toast-fade-bottom-leave-active {\n  -webkit-transition: -webkit-transform 0.4s cubic-bezier(0.36, 0.66, 0.04, 1);\n  transition: -webkit-transform 0.4s cubic-bezier(0.36, 0.66, 0.04, 1);\n  transition: transform 0.4s cubic-bezier(0.36, 0.66, 0.04, 1);\n  transition: transform 0.4s cubic-bezier(0.36, 0.66, 0.04, 1), -webkit-transform 0.4s cubic-bezier(0.36, 0.66, 0.04, 1);\n  ransform: translateY(10px);\n  opacity: 1;\n}\n.md .toast-fade-bottom-enter, .md .toast-fade-bottom-leave-to {\n  -webkit-transition: -webkit-transform 0.3s cubic-bezier(0.36, 0.66, 0.04, 1);\n  transition: -webkit-transform 0.3s cubic-bezier(0.36, 0.66, 0.04, 1);\n  transition: transform 0.3s cubic-bezier(0.36, 0.66, 0.04, 1);\n  transition: transform 0.3s cubic-bezier(0.36, 0.66, 0.04, 1), -webkit-transform 0.3s cubic-bezier(0.36, 0.66, 0.04, 1);\n  -webkit-transform: translateY(100%);\n          transform: translateY(100%);\n  opacity: 0;\n}\n.md .toast-fade-bottom-enter-active, .md .toast-fade-bottom-leave-active {\n  opacity: 1;\n}\n.md .toast-fade-bottom-enter, .md .toast-fade-bottom-leave-to {\n  opacity: 0.01;\n}\n"],sourceRoot:""}])},608:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(18),i=n(12),s=n(400),a=n.n(s),r=n(11),A=n(144),c=function(){},b=20001,u={name:"vm-toast",mixins:[r.a],components:{VmButton:A.a},data:function(){return{defaultOptions:{message:"",closeButtonText:"OK",showCloseButton:!1,dismissOnPageChange:!0,duration:3e3,position:"bottom",cssClass:"",onDismiss:c},message:"",closeButtonText:"OK",showCloseButton:!1,dismissOnPageChange:!0,duration:3e3,position:"bottom",cssClass:"",onDismiss:c,isActive:!1,timer:null,dismissCallback:c,presentCallback:c,zIndex:this.getZIndex()}},created:function(){var t=this,e=a()({},this.defaultOptions,this.$options.$data);this.message=e.message,this.closeButtonText=e.closeButtonText,this.cssClass=e.cssClass,this.showCloseButton=Object(i.s)(e.showCloseButton),this.dismissOnPageChange=Object(i.s)(e.dismissOnPageChange),["top","middle","bottom"].indexOf(e.position)>-1&&(this.position=e.position),Object(i.n)(e.duration)&&(this.duration=e.duration),Object(i.m)(e.onDismiss)&&(this.onDismiss=e.onDismiss),this.dismissOnPageChange&&(this.unReg=Object(o.o)(function(){t.isActive&&(t.showCloseButton?t.closeButtonClick():t.timer&&(window.clearTimeout(t.timer),t.timer=null,t.dismiss()))}))},methods:{beforeEnter:function(){this.enabled=!1,this.$app&&this.$app.setEnabled(!1,400)},afterEnter:function(){this.presentCallback(),Object(o.c)();var t=document.querySelector("button");t&&t.focus(),this.enabled=!0},beforeLeave:function(){this.enabled=!1,this.$app&&this.$app.setEnabled(!1,400)},afterLeave:function(){this.dismissCallback(),this.$el.remove(),this.enabled=!0},getZIndex:function(){return b++},present:function(){var t=this;return this.isActive=!0,this.showCloseButton||(this.timer=window.setTimeout(function(){t.timer=null,t.dismiss()},this.duration)),this.isActive=!0,new Promise(function(e){t.presentCallback=e})},dismiss:function(){var t=this;return this.isActive?(this.isActive=!1,this.unReg&&this.unReg(),Object(i.m)(this.onDismiss)&&this.onDismiss(),new Promise(function(e){t.dismissCallback=e})):new Promise(function(t){t()})},closeButtonClick:function(){this.dismiss()}}},m={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{"class":["ion-toast",t.modeClass,t.cssClass],style:{"z-index":t.zIndex},attrs:{role:"dialog"}},[n("transition",{attrs:{name:"toast-fade-"+t.position},on:{"before-enter":t.beforeEnter,"after-enter":t.afterEnter,"before-leave":t.beforeLeave,"after-leave":t.afterLeave}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isActive,expression:"isActive"}],staticClass:"toast-wrapper","class":["toast-"+t.position]},[n("div",{staticClass:"toast-container"},[t.message?n("div",{staticClass:"toast-message"},[t._v(t._s(t.message))]):t._e(),t._v(" "),t.showCloseButton?n("vm-button",{staticClass:"toast-button",attrs:{clear:""},on:{click:function(e){t.closeButtonClick()}}},[t._v(t._s(t.closeButtonText))]):t._e()],1)])])],1)},staticRenderFns:[]};var f=n(6)(u,m,!1,function(t){n(539)},null,null).exports,l=n(401),p=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}();var d=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,l["a"]),p(e,[{key:"normalizeOptions",value:function(t){var e=Array.prototype.slice.call(arguments);return 2===e.length&&(t={message:e[0],duration:e[1]}),1===e.length&&Object(i.r)(e[0])&&(t={message:e[0]}),1===e.length&&Object(i.o)(e[0])&&(t=e[0]),t.scrollControl=!1,t}},{key:"isPresentHandled",value:function(t){return!t.isH5&&window.VM&&window.VM.platform&&window.VM.platform.showToast&&window.VM.platform.showToast(t)}},{key:"isDismissHandled",value:function(){return window.VM&&window.VM.platform&&window.VM.platform.hideToast&&window.VM.platform.hideToast()}}]),e}();function C(){var t=new d(f,"toast-portal"),e=Array.prototype.slice.call(arguments);return t.present.apply(t,function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}(e)),t}C.present=C;var w=C,v={components:{"vm-button":A.a},methods:{showToast:function(t){w.present({message:"Top was added successfully",duration:3e3,position:t,dismissOnPageChange:!0,onDismiss:function(){console.debug("Toast onDidDismiss()")}})},showLongToast:function(){w.present({message:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea voluptatibus quibusdam eum nihil optio, ullam accusamus magni, nobis suscipit reprehenderit, sequi quam amet impedit. Accusamus dolorem voluptates laborum dolor obcaecati.",duration:3e3,onDismiss:function(){console.debug("Toast onDidDismiss()")}})},showDismissDurationToast:function(){w.present({message:"I am dismissed after 1.5 seconds",duration:1500,onDismiss:function(){console.debug("Toast onDidDismiss()")}})},showToastWithCloseButton:function(){w.present({message:"Your internet connection appears to be offline. Data integrity is not guaranteed.",showCloseButton:!0,closeButtonText:"Ok",onDismiss:function(){console.debug("Toast onDidDismiss()")}})}}},h={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("vm-page",{directives:[{name:"nav",rawName:"v-nav",value:{title:"Toast"},expression:"{title: 'Toast'}"}]},[n("vm-content",{attrs:{padding:""}},[n("vm-button",{attrs:{block:""},on:{click:function(e){t.showToast("bottom")}}},[t._v("Show Toast Bottom Position")]),t._v(" "),n("vm-button",{attrs:{block:""},on:{click:function(e){t.showToast("top")}}},[t._v("Show Toast Top Position")]),t._v(" "),n("vm-button",{attrs:{block:""},on:{click:function(e){t.showToast("middle")}}},[t._v("Show Toast Middle Position")]),t._v(" "),n("vm-button",{attrs:{block:"","margin-bottom":""},on:{click:function(e){t.showLongToast()}}},[t._v("Show Long Toast")]),t._v(" "),n("vm-button",{attrs:{block:""},on:{click:function(e){t.showDismissDurationToast()}}},[t._v("Show Custom Duration Toast")]),t._v(" "),n("vm-button",{attrs:{block:""},on:{click:function(e){t.showToastWithCloseButton()}}},[t._v("Show Close Button Toast")])],1)],1)},staticRenderFns:[]},k=n(6)(v,h,!1,null,null,null);e["default"]=k.exports}});
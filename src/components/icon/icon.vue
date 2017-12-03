<template>
    <i class="ion-icon" role="img" :class="['icon', 'icon-'-theme, colorClass]"></i>
</template>
<script>
    import {isTrueProperty} from '../../utils/utils'
    import ThemeMixins from '../../themes/theme.mixins';

    export default {
        name: 'ion-icon',
        mixins: [ThemeMixins],
        data() {
            return {
                css: '',
                isActive: isTrueProperty(this.active)
            }
        },
        props: {
            name: {
                type: String,
                default: ''
            },
            ios: String,
            md: String,
            active: [String, Boolean]
        },
        computed: {
            iconName() {
                let name = this.name;
                if (!(/^md-|^ios-|^logo-/.test(name))) {
                    // this does not have one of the defaults
                    // so lets auto add in the mode prefix for them
                    return this.theme + '-' + name;
                }
                return name;
            },
            colorClass() {
                return this.color ? `icon-${this.theme}-${this.color}` : '';
            }
        },
        watch: {
            active(val) {
                this.isActive = isTrueProperty(val);

                this.update();
            }
        },
        mounted () {
            if (this.$parent.$data.componentName === 'ionItem') {
                this.setElementClass('item-icon', true)
            }

            this.update();
        },
        destroyed() {
            if (this.css) {
                this.setElementClass(this.css, false);
            }
        },
        methods: {
            update() {
                let iconName;

                if (this.ios && this.theme === 'ios') {
                    iconName = this.ios;
                } else if (this.md && this.theme === 'md') {
                    iconName = this.md;
                } else {
                    iconName = this.iconName;
                }

                let iconMode = iconName.split('-', 2)[0];
                if (iconMode === 'ios' && this.isActive && iconName.indexOf('logo-') < 0 && iconName.indexOf('-outline') < 0) {
                    iconName += '-outline';
                }

                let css = 'ion-' + iconName;
                if (this.css === css) {
                    return;
                }
                if (this.css) {
                    this.setElementClass(this.css, false);
                }
                this.css = css;
                this.setElementClass(css, true);

                let label = iconName.replace('ios-', '')
                    .replace('md-', '')
                    .replace('-', ' ');
                this.setElementAttribute('aria-label', label);
            }
        }
    };
</script>

<style lang="scss">
    @import 'icon';
    @import 'icon.ios';
    @import 'icon.md';
    @import 'icon.wp';
</style>
<template>
    <svg :class="svgClass" :style="{width: width,height:height}" aria-hidden="true">
        <use :xlink:href="iconClass"></use>
    </svg>
</template>

<script>
    export default {
        name: 'icon-svg',
        props: {
            iconName: {
                type: String,
                required: true
            },
            width: {
                type: String,
                default: '1em'
            },
            height: {
                type: String,
                default: '1em'
            },
            className: {
                type: String,
                default: ''
            }
        },
        computed: {
            iconClass() {
                return `#icon-${this.iconName}`
            },
            svgClass() {
                if (this.className) {
                    return 'svg-icon ' + this.className
                } else {
                    return 'svg-icon'
                }
            },
        }
    }
</script>

<style>
    .svg-icon {
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
</style>
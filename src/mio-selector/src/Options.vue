<script>
export default {
    name: "mio-options",
    props: {
        options: {
            type: Array,
            default: () => []
        }
    },
    inject: ["updateMethod"],
    methods: {
        handleSelect(value) {
            const _value = value

            if (_value) {
                this.updateMethod.value(_value);
            }
        }
    }
}
</script>

<template>
    <div class="mio-options">
        <template v-for="option in options">
            <div @click="handleSelect(option.value)">{{ option.label }}</div>
        </template>
    </div>
</template>

<style scoped lang="scss">
.mio-options {
    position: absolute;
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0 0 6PX rgba(45, 45, 45, 0.25);
    left: 50%;
    transform: translateX(-50%) scaleY(0);
    width: 95%;
    border-radius: 4PX;
    opacity: 0;
    height: auto;
    max-height: 0;

    &.active {
        opacity: 1;
        height: auto;
        max-height: 300PX;
        transform: translateX(-50%) scaleY(1);
        transition-duration: 0.25s;
        transition-timing-function: ease-in-out;

        &.top {
            transform-origin: bottom;
            top: auto;
            bottom: 120%;
        }

        &.bottom {
            transform-origin: top;
            top: 120%;
            bottom: auto;
        }
    }
}
</style>

<script>
export default {
    name: "mio-options",
    props: {
        options: {
            type: Array,
            default: () => []
        }
    },
    inject: [
            "value",
            "updateMethod"
    ],
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
            <div class="mio-options-option" :class="value === option.value ? 'active' : ''" @click="handleSelect(option.value)">{{ option.label }}</div>
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
    display: flex;
    flex-direction: column;
    border-radius: 4PX;
    overflow-y: auto;
    overflow-x: hidden;
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

    .mio-options-option {
        flex: 0 0 32PX;
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-size: 14PX;
        font-weight: 400;
        line-height: 32PX;
        padding: 2PX 6PX;
        box-sizing: border-box;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;

        &:hover {
            background-color: rgba(0, 156, 156, 0.1);
            cursor: pointer;
        }

        &.active {
            background-color: rgba(0, 156, 156, 0.2);
        }
    }
}
</style>

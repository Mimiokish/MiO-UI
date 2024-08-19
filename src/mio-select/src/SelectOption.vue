<script>
export default {
    name: "mio-select-option"
}
</script>

<script setup>
import { inject } from "vue";

const props = defineProps({
    label: {
        type: String,
        default: ""
    }
});

const updateMethods = inject("updateMethods");

function handleClick(event) {
    const _target = event.target;

    if (_target) {
        updateMethods.value(_target.getAttribute("key"), _target.getAttribute("value"), _target.innerText);
    }
}
</script>

<template>
    <div class="mio-select-option" @click="handleClick">
        <div class="mio-select-option-label" v-show="props.label">{{ props.label }}</div>
        <slot />
    </div>
</template>

<style scoped lang="scss">
.mio-select-option {
    box-sizing: border-box;
    flex: 0 0 32PX;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 14PX;
    font-weight: 400;
    padding: 2PX 6PX;
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

    .mio-select-option-label {
        pointer-events: none;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-size: 14PX;
        font-weight: 400;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
}
</style>

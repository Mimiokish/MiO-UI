<script>
export default {
    name: "mio-dropdown-menu",
}
</script>

<script setup>
import { inject } from "vue";

const UUID = inject("UUID");
</script>

<template>
    <div :id="'MiO-Dropdown-Menu-' + UUID" class="mio-dropdown-menu">
        <slot />
    </div>
</template>

<style scoped lang="scss">
.mio-dropdown-menu {
    position: absolute;
    left: 50%;
    transform: translateX(-50%) scale(0);
    padding: 12PX 0;
    pointer-events: none;
    opacity: 0.5;
    height: auto;
    background-color: rgba(255, 255, 255, 1);
    -ms-overflow-style: none;
    scrollbar-width: none;
    transition-duration: 0.25s;
    transition-timing-function: ease-in-out;

    &:hover {
        cursor: pointer;
    }

    &::-webkit-scrollbar {
        display: none;
    }

    &.active {
        transform: translateX(-50%) scale(1);
        pointer-events: auto;
        opacity: 1;
        height: auto;
        border: 1PX solid rgba(226, 226, 226, 1);
        box-shadow: 0 0 12PX rgba(226, 226, 226, 0.3);
    }

    &.top {
        transform-origin: bottom center;
        bottom: 120%;
    }

    &.bottom {
        transform-origin: top center;
        top: 120%;
    }
}
</style>

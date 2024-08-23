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
    transform: translateX(-50%) scaleY(0);
    padding: 12PX 0;
    pointer-events: none;
    opacity: 0;
    height: 0;
    transition-duration: 0.25s;
    transition-timing-function: ease-in-out;

    &:hover {
        cursor: pointer;
    }

    &.active {
        transform: translateX(-50%) scaleY(1);
        pointer-events: all;
        opacity: 1;
        height: auto;
        border: 1PX solid rgba(226, 226, 226, 1);
        box-shadow: 0 0 12PX rgba(226, 226, 226, 0.3);
        -ms-overflow-style: none;
        scrollbar-width: none;
    }

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
</style>

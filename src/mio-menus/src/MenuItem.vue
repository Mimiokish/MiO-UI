<script>
export default {
    name: "mio-menu-item"
}
</script>

<script setup>
import { inject } from "vue";
import { useRouter } from "vue-router";

const props = defineProps({
    index: {
        type: [ String, Number ],
        required: true
    },
    path: {
        type: String,
        required: false
    },
    url: {
        type: String,
        required: false
    }
});

const updateMethods = inject("updateMethods");
const active = inject("active");
const router = useRouter();

function handleClick() {
    updateMethods.setActive(props.index);
    if (props.url) {
        window.open(props.url, "_blank");
    }

    if (props.path) {
        router.push(props.path);
    }
}
</script>

<template>
    <div class="mio-menu-item" :class="active === props.index ? 'active' : ''" @click="handleClick">
        <slot name="icon" />
        <slot name="label" />
        <slot />
    </div>
</template>

<style lang="scss">
.mio-menu-item {
    box-sizing: border-box;
    margin-left: 16PX;
    display: flex;
    transition-duration: 0.25s;
    transition-timing-function: ease-in-out;

    &:hover {
        cursor: pointer;
        background-color: rgba(246, 246, 246, 1);
    }

    &.active {
        color: rgba(46, 166, 246, 0.9);
    }
}
</style>

<script>
export default {
    name: "mio-breadcrumb-item"
}
</script>

<script setup>
import { inject } from "vue";
import { useRouter } from "vue-router";

const props = defineProps({
    link: {
        type: String,
        default: ""
    },
    active: {
        type: Boolean,
        default: false
    }
});

const router = useRouter();

function handleClick() {
    if (this.link) {
        router.push(this.link);
    }
}
const separator = inject("separator");
</script>

<template>
    <div class="mio-breadcrumb-separator">{{ separator }}</div>
    <div class="mio-breadcrumb-item" :class="active ? 'active' : ''" @click="handleClick">
        <slot />
    </div>
</template>

<style scoped lang="scss">
.mio-breadcrumb-separator {
    margin: 0 20PX;
}
.mio-breadcrumb-item {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 60PX;
    height: 48PX;
    line-height: 48PX;
    font-size: 14PX;
    font-weight: 400;
    color: rgba(45, 45, 45, 0.4);

    &:hover {
        cursor: pointer;
    }

    &.active {
        color: rgba(45, 45, 45, 0.9);
    }
}
</style>

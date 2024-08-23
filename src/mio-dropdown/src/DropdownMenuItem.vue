<script>
export default {
    name: "mio-dropdown-menu-item"
}
</script>

<script setup>
import { useSlots } from "vue";

const props = defineProps({
    label: {
        type: String,
        default: ""
    }
})

const slots = useSlots();
</script>

<template>
    <div class="mio-dropdown-menu-item">
        <slot v-if="slots['default']" />
        <template v-else>{{ label }}</template>
    </div>
</template>

<style scoped lang="scss">
.mio-dropdown-menu-item {
    padding: 6PX 20PX;
    margin-bottom: 12PX;

    &:nth-child(n - 1) {
        margin-bottom: 0;
    }

    &:hover {
        cursor: pointer;
        background-color: rgba(226, 226, 226, 0.3);
    }
}
</style>

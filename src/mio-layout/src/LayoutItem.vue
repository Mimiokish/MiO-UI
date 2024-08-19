<script>
export default {
    name: "mio-layout-item"
}
</script>

<script setup>
import { ref } from "vue";

const props = defineProps({
    width: {
        type: String,
        default: "1"
    }
});

const style = ref({});

function initialStyle() {
    const _width = props.width;

    if (_width === "1") {
        Object.assign(style.value, {
            flex: "1"
        });
    } else {
        Object.assign(style.value, {
            flex: `0 0 ${_width}`
        });
    }
}

initialStyle();
</script>

<template>
    <div :style="style" class="mio-layout-item">
        <slot />
    </div>
</template>

<style scoped lang="scss">
.mio-layout-item {
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
}
</style>

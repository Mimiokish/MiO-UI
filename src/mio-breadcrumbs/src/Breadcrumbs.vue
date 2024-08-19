<script>
import Utils from "../../utils";

export default {
    name: "mio-breadcrumbs"
}
</script>

<script setup>
import { provide, onMounted } from "vue";

const props = defineProps({
    separator: {
        type: String,
        default: "/"
    }
});
const UUID = Utils.GenerateUUID();

provide("separator", props.separator);

function disableFirstSeparator() {
    const children = document.getElementById('MiO-Breadcrumbs-' + UUID).children;
    if (children.length > 0 && children[0]) {
        children[0].remove();
    }
}

onMounted(() => {
    disableFirstSeparator();
});
</script>

<template>
    <div :id="'MiO-Breadcrumbs-' + UUID" class="mio-breadcrumbs">
        <slot />
    </div>
</template>

<style scoped lang="scss">
.mio-breadcrumbs {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    overflow: hidden;
}
</style>

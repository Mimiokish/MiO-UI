<script>
export default {
    name: "mio-menus"
}
</script>

<script setup>
import Utils from "../../utils/index.js";
import { ref, provide } from "vue";

const props = defineProps({
    collapse: {
        type: Boolean,
        required: false,
        default: false
    },
    collapseWidth: {
        type: Number,
        required: false,
        default: 30
    },
    accordion: {
        type: Boolean,
        required: false,
        default: true
    }
})

const UUID = Utils.GenerateUUID();
const active = ref(null);

provide("configs", {
    collapse: props.collapse,
    accordion: props.accordion
});
provide("active", active);
provide("updateMethods", {
    setActive: setActive
})

function setActive(value) {
    active.value = value;
}
</script>

<template>
    <div :id="'MiO-Menus-' + UUID" class="mio-menus">
        <slot />
    </div>
</template>

<style lang="scss">
.mio-menus {
    height: auto;
    font-size: 18PX;
    line-height: 38PX;
    font-weight: 500;
    color: rgba(46, 46, 46, 0.8);
}
</style>

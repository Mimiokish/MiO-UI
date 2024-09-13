<script>
export default {
    name: "mio-table-column"
}
</script>

<script setup>
import { inject, ref, useSlots, onBeforeMount } from "vue";

const props = defineProps({
    prop: {
        type: [ String, Number ],
        required: true,
        default: ""
    },
    title: {
        type: String,
        required: false,
        default: ""
    },
    width: {
        type: [ String, Number ],
        required: false,
        default: null
    },
    fixed: {
        type: [ String, null ],
        required: false,
        default: null
    },
    align: {
        type: String,
        required: false,
        default: "left"
    }
})

const UpdateMethods = inject("UpdateMethods");

const _slots = useSlots();
const _style = ref({});

function _setStyle() {
    _style.value = {
        width: props.width + "PX",
        minWidth: props.width + "px",
        maxWidth: props.width + "PX",
        textAlign: props.align
    }
}

onBeforeMount(() => {
    UpdateMethods.FillColumns(props.prop, _slots["default"], props.title, props.width, props.fixed, props.align);
    _setStyle();
});
</script>

<template>
    <th class="mio-table-column" :class="props.fixed ? 'mio-table-column-fixed' : ''" rowspan="1" colspan="1" :style="{ ..._style }">
        <template v-if="_slots['default']">
            <slot name="default" />
        </template>
        <template v-else>{{ props.title }}</template>
    </th>
</template>

<style lang="scss" scoped>
.mio-table-column {
    box-sizing: border-box;
    padding: 6PX 10PX;
    background: inherit;
    font-size: 14PX;
    font-weight: 800;
    color: rgba(46, 46, 46, 0.8);
    height: 38PX;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: left;

    &.mio-table-column-fixed {
        position: sticky !important;
        z-index: 99;
        right: 0;
        border-radius: 6PX;
    }
}
</style>

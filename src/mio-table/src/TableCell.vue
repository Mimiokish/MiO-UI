<script>
export default {
    name: "mio-table-cell"
}
</script>

<script setup>
import { ref, useSlots, onMounted } from "vue";

const props = defineProps({
    prop: {
        type: [ String, Number ],
        required: true,
        default: null
    },
    label: {
        type: [ String, Number ],
        required: false,
        default: ""
    },
    width: {
        type: [ String, Number ],
        required: false,
        default: 200
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

onMounted(() => {
    _setStyle();
})
</script>

<template>
    <td class="mio-table-cell" :class="props.fixed ? (props.fixed === 'left' ? 'mio-table-cell-fixed mio-table-cell-fixed-left' : 'mio-table-cell-fixed mio-table-cell-fixed-right') : ''" rowspan="1" colspan="1" :style="{ ..._style }">
        <template v-if="_slots['default']">
            <slot name="default" />
        </template>
        <template v-else>{{ props.label }}</template>
    </td>
</template>

<style lang="scss" scoped>
.mio-table-cell {
    box-sizing: border-box;
    padding: 6PX 10PX;
    background: inherit;
    font-size: 12PX;
    font-weight: 600;
    color: rgba(46, 46, 46, 0.6);
    height: 36PX;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    &.mio-table-cell-fixed {
        position: sticky !important;
        z-index: 99;
    }
    &.mio-table-cell-fixed-right {
        right: 0;
    }
    &.mio-table-cell-fixed-left {
        left: 0;
    }
}
</style>

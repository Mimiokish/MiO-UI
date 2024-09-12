<script>
export default {
    name: "mio-table-cell"
}
</script>

<script setup>
import { useSlots } from "vue";

const props = defineProps({
    prop: {
        type: [ String, Number ],
        default: null
    },
    label: {
        type: String,
        default: ""
    }
})

const _slots = useSlots();
</script>

<template>
    <td class="mio-table-cell">
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
    font-size: 12PX;
    font-weight: 600;
    color: rgba(46, 46, 46, 0.6);
    height: 36PX;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>
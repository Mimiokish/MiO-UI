<script>
export default {
    name: "mio-compact-table-column"
}
</script>

<script setup>
import { inject, useSlots, onMounted } from "vue";

const props = defineProps({
    prop: {
        type: String,
        required: true
    },
    label: {
        type: String,
        required: true
    },
    span: {
        type: Number,
        default: 1
    },
    fixed: {
        type: Boolean,
        default: false
    },
    tooltip: {
        type: Boolean,
        default: false
    }
})

const UpdateMethods = inject("UpdateMethods");

const slots = useSlots();

onMounted(() => {
    UpdateMethods.FillColumns(props.prop, props.label, props.span, slots["body"], props.fixed, props.tooltip);
});
</script>

<template>
    <th class="mio-compact-table-header-column" :class="props.fixed ? 'fixed' : ''" :style="{ flex: props.span }">
        <template v-if="slots['header']">
            <slot name="header" />
        </template>
        <template v-else>
            {{ props.label }}
        </template>
    </th>
</template>

<style lang="scss" scoped>
.mio-compact-table-header-column {
    box-sizing: border-box;
    padding: 6PX 10PX;
    font-size: 14PX;
    font-weight: 800;
    color: rgba(46, 46, 46, 0.8);
    height: 38PX;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: left;
}
</style>

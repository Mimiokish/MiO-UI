<script>
export default {
    name: "mio-table-column"
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

const updateMethods = inject("updateMethods");

const slots = useSlots();

onMounted(() => {
    updateMethods.fillColumns(props.prop, props.label, props.span, slots["body"], props.fixed, props.tooltip);
});
</script>

<template>
    <th class="mio-table-header-column" :class="props.fixed ? 'fixed' : ''" :style="{ flex: props.span }">
        <template v-if="slots['header']">
            <slot name="header" />
        </template>
        <template v-else>
            {{ props.label }}
        </template>
    </th>
</template>

<style lang="scss" scoped>
.mio-table-header-column {
    box-sizing: border-box;
    padding: 6PX 10PX;
    color: rgba(46, 46, 46, 0.8);
    font-size: 18PX;
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: flex;
    justify-content: flex-start;

    &.fixed {
        margin-left: auto;
    }
}
</style>

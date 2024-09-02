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
    tooltip: {
        type: Boolean,
        default: false
    }
})

const updateMethods = inject("updateMethods");

const slots = useSlots();

onMounted(() => {
    updateMethods.fillColumns(props.prop, props.label, props.span, slots["body"], props.tooltip);
});
</script>

<template>
    <div class="mio-table-column" :style="`flex: ${ props.span }`">
        <template v-if="slots['header']">
            <slot name="header" />
        </template>
        <template v-else>
            {{ props.label }}
        </template>
    </div>
</template>

<style lang="scss" scoped>
.mio-table-column {
    box-sizing: border-box;
    flex: 1;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18PX;
    font-weight: 600;
    color: rgba(46, 46, 46, 0.8);
    padding: 6PX 10PX;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 38PX;
}
</style>

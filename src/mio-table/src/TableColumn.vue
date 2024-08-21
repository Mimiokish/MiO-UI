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
    }
})

const updateMethods = inject("updateMethods");

const slots = useSlots();

onMounted(() => {
    updateMethods.fillColumns(props.prop, props.label, props.span, slots["body"]);
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
    flex: 1;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>

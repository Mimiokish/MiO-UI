<script>
export default {
    name: "mio-table-row"
}
</script>

<script setup>
import { inject, onBeforeMount } from "vue";

const props = defineProps({
    row: {
        type: Object,
        default: () => {}
    }
})

const UpdateMethods = inject("UpdateMethods");

onBeforeMount(() => {
    UpdateMethods.FillRows(props.row);
})
</script>

<template>
    <tr class="mio-table-row">
        <slot name="default" />
    </tr>
</template>

<style lang="scss" scoped>
.mio-table-row {
    box-sizing: border-box;
    background: inherit;
    border-top: 1PX dashed rgba(46, 46, 46, 0.3);
}
</style>

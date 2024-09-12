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
}
</style>
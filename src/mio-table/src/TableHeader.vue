<script>
export default {
    name: "mio-table-header"
}
</script>

<script setup>
import { inject } from "vue";

const UUID = inject("UUID");
const Rows = inject("Rows");
</script>

<template>
    <thead class="mio-table-header">
        <tr class="mio-table-row">
            <slot name="default" />
        </tr>
    </thead>
</template>

<style lang="scss" scoped>
.mio-table-header {

    .mio-table-row {
        border-radius: 6PX;
        box-shadow: 0 0 12PX rgba(46, 46, 46, 0.1);
    }
}
</style>
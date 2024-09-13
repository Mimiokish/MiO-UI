<script>
export default {
    name: "mio-table-header"
}
</script>

<script setup>
import { inject } from "vue";

const UUID = inject("UUID");
</script>

<template>
    <thead :id="'MiO-Table-Header-' + UUID" class="mio-table-header">
        <tr class="mio-table-row">
            <slot name="default" />
        </tr>
    </thead>
</template>

<style lang="scss" scoped>
.mio-table-header {
    box-sizing: border-box;
    background: inherit;

    .mio-table-row {
        box-sizing: border-box;
        border-radius: 6PX;
        background: inherit;
        box-shadow: 0 0 12PX rgba(46, 46, 46, 0.1);
    }
}
</style>

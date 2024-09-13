<script>
export default {
    name: "mio-table-body"
}
</script>

<script setup>
import { inject } from "vue";

const UUID = inject("UUID");
</script>

<template>
    <tbody :id="'MiO-Table-Body-' + UUID" class="mio-table-body">
        <slot name="default" />
    </tbody>
</template>

<style lang="scss" scoped>
.mio-table-body {
    box-sizing: border-box;
    background: inherit;
}
</style>

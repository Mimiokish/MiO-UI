<script>
export default {
    name: "mio-table-body"
}
</script>

<script setup>
import { inject } from "vue";

const props = defineProps({
});

const UUID = inject("UUID");
const Language = inject("Language");
const Rows = inject("Rows");
</script>

<template>
    <tbody class="mio-table-body">
        <slot name="default" />
    </tbody>
</template>

<style lang="scss" scoped>
.mio-table-body {
}
</style>
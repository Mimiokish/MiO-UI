<script>
export default {
    name: "mio-card-header"
}
</script>

<script setup>
import { inject } from "vue";

const UUID = inject("UUID");
</script>

<template>
    <div :id="'MiO-Card-Header-' + UUID" class="mio-card-header">
        <slot />
    </div>
</template>

<style scoped lang="scss">
.mio-card-header {
    box-sizing: border-box;
    padding: 8PX;
    color: rgba(45, 45, 45, 0.9);
    font-size: 18PX;
    line-height: 18PX;
    font-weight: 800;
    overflow: hidden;
}
</style>

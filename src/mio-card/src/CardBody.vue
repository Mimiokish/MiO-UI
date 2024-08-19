<script>
export default {
    name: "mio-card-body"
}
</script>

<script setup>
import { inject } from "vue";

const UUID = inject("UUID");
</script>

<template>
    <div :id="'MiO-Card-Body-' + UUID" class="mio-card-body">
        <slot />
    </div>
</template>

<style scoped lang="scss">
.mio-card-body {
    box-sizing: border-box;
    padding: 8PX;
    color: rgba(45, 45, 45, 0.8);
    font-size: 16PX;
    line-height: 16PX;
    font-weight: 400;
    overflow-y: auto;
    overflow-x: hidden;
}
</style>

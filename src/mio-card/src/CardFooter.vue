<script>
export default {
    name: "mio-card-footer"
}
</script>

<script setup>
import { inject } from "vue";

const UUID = inject("UUID");
</script>

<template>
    <div :id="'MiO-Card-Footer-' + UUID" class="mio-card-footer">
        <slot />
    </div>
</template>

<style scoped lang="scss">
.mio-card-footer {
    box-sizing: border-box;
    padding: 8PX;
    color: rgba(45, 45, 45, 0.5);
    font-size: 14PX;
    line-height: 14PX;
    font-weight: 300;
    overflow: hidden;
}
</style>

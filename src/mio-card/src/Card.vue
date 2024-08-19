<script>

export default {
    name: "mio-card"
}
</script>

<script setup>
import { provide } from "vue";
import Utils from "../../utils";

const UUID = Utils.GenerateUUID();

provide("UUID", UUID);
</script>

<template>
    <div :id="'MiO-Card-' + UUID" class="mio-card">
        <slot />
    </div>
</template>

<style scoped lang="scss">
.mio-card {
    width: 100%;
    height: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    border-radius: 6PX;
    box-shadow: 0 0 16PX rgba(45, 45, 45, 0.1);
    overflow: hidden;
    transition-duration: 0.25s;
    transition-timing-function: ease-in-out;

    &:hover {
        box-shadow: 0 0 16PX rgba(45, 45, 45, 0.2);
    }
}
</style>

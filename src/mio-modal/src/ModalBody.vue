<script>
export default {
    name: "mio-modal-body"
}
</script>

<script setup>
import { inject } from "vue";

const UUID = inject("UUID");
</script>

<template>
    <div :id="'MiO-Modal-Body-' + UUID" class="mio-modal-body">
        <slot />
    </div>
</template>

<style lang="scss" scoped>
.mio-modal-body {
    flex: 1;
    width: 600PX;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 16PX 0 16PX;
    box-sizing: border-box;
}
</style>

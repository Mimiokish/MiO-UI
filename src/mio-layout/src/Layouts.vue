<script>
export default {
    name: "mio-layouts"
}
</script>

<script setup>
import Utils from "../../utils/index.js";

const UUID = Utils.GenerateUUID();
</script>

<template>
    <div :id="'MiO-Layout-' + UUID" class="mio-layouts">
        <slot />
    </div>
</template>

<style scoped lang="scss">
.mio-layouts {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
}
</style>

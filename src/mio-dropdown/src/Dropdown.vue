<script>
export default {
    name: "mio-dropdown"
}
</script>

<script setup>
import { provide } from "vue";
import Utils from "../../utils";

const props = defineProps({
    width: {
        type: String,
        default: "100PX"
    }
})

const UUID = Utils.GenerateUUID();

provide("UUID", UUID);
</script>

<template>
    <div :id="'MiO-Dropdown-' + UUID" class="mio-dropdown" :style="'width: ' + width">
        <slot />
    </div>
</template>

<style scoped lang="scss">
.mio-dropdown {
    position: relative;
    box-sizing: border-box;
    height: 36PX;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1PX solid rgba(226, 226, 226, 1);
    box-shadow: 0 0 12PX rgba(226, 226, 226, 0.3);
}
</style>

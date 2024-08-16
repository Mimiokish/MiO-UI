<script>
import Utils from "../../utils";

export default {
    name: "mio-card",
    data() {
        return {
            UUID: Utils.GenerateUUID()
        }
    },
    provide() {
        return {
            UUID: this.UUID
        }
    }
}
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

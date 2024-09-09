<script>
export default {
    name: "mio-modal-header"
}
</script>

<script setup>
import { inject } from "vue";

const UUID = inject("UUID");
const methods = inject("methods");
</script>

<template>
    <div :id="'MiO-Modal-Header-' + UUID" class="mio-modal-header">
        <div class="mio-modal-slot">
            <slot />
        </div>
        <mio-button class="mio-modal-header-actions mio-modal-action-exit" @click="methods.handleClose">&#10006;</mio-button>
    </div>
</template>

<style lang="scss" scoped>
.mio-modal-header {
    flex: 0 0 48PX;
    width: 600PX;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16PX;
    box-sizing: border-box;

    .mio-modal-slot {
        flex: 1;
        height: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        color: rgba(46, 46, 46, 0.8);
        font-weight: 800;
        font-size: 16PX;
        line-height: 48PX;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }

    .mio-modal-action-exit {
        border: none;
        flex: 0 0 16PX;
        height: 16PX;
        margin-left: 16PX;
        background-color: rgba(255, 255, 255, 1);
        font-size: 12PX;
        font-weight: 400;
        line-height: 16PX;
        color: rgba(45, 45, 45, 0.8);
        justify-items: flex-end;
        padding: 0;
    }
}
</style>

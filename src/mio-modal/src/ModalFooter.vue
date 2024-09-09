<script>
export default {
    name: "mio-modal-footer"
}
</script>

<script setup>
import { inject } from "vue";

const UUID = inject("UUID");
const methods = inject("methods");
</script>

<template>
    <div :id="'MiO-Modal-Footer-' + UUID" class="mio-modal-footer">
        <div class="mio-modal-slot">
            <slot />
        </div>
        <mio-button class="mio-modal-footer-actions mio-modal-action-exit" radius="medium" @click="methods.handleClose">close</mio-button>
    </div>
</template>

<style lang="scss" scoped>
.mio-modal-footer {
    flex: 0 0 36PX;
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
        color: rgba(46, 46, 46, 0.6);
        font-size: 12PX;
        font-weight: 600;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }

    .mio-modal-action-exit {
        flex: 0 0 60PX;
        height: 36PX;
        margin-left: 16PX;
        background-color: rgba(255, 255, 255, 1);
    }
}
</style>

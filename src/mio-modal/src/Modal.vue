<script>
export default {
    name: "mio-modal"
}
</script>

<script setup>
import { provide, useSlots, onMounted } from "vue";
import Utils from "../../utils";

const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false
    }
});
const emits = defineEmits(["update:modelValue"]);

const UUID = Utils.General.GenerateUUID();
const slots = useSlots();

provide("UUID", UUID);
provide("methods", {
    handleClose: handleClose
});

function updateModelValue(value) {
    emits("update:modelValue", value);
}

function handleClose(event) {
    updateModelValue(false);
}

onMounted(() => {
    Utils.Initialize();
})
</script>

<template>
    <div v-show="props.modelValue" :id="'MiO-Modal-' + UUID" class="mio-modal" @click="handleClose">
        <div :id="'MiO-Modal-Content-' + UUID" class="mio-modal-content" @click="(event) => { event.stopPropagation() } ">
            <slot v-if="!slots['body']" />
            <template v-else>
                <slot name="header" />
                <slot name="body" />
                <slot name="footer" />
            </template>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.mio-modal {
    z-index: 999;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(45, 45, 45, 0.8);

    .mio-modal-content {
        background-color: rgba(255, 255, 255, 1);
        border-radius: 8PX;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
}
</style>

<script>
export default {
    name: "mio-date"
}
</script>

<script setup>
import { ref, onMounted } from "vue";
import Utils from "../../utils/index.js";

const props = defineProps({
    modelValue: {
        type: [ String, Number, null ],
        required: true,
        default: null
    },
    label: {
        type: [ String, Number, null ],
        required: false,
        default: null
    },
    width: {
        type: [ String, Number, null ],
        required: false,
        default: 300
    },
    picker: {
        type: Boolean,
        required: false,
        default: false
    }
})

const UUID = Utils.General.GenerateUUID();

const _style = ref({})

function _setStyle() {
    _style.value = {
        width: props.width + "PX",
        height: props.label ? "64PX" : "38PX"
    }
}

onMounted(() => {
    _setStyle();
})
</script>

<template>
    <div :id="'MiO-Date-' + UUID" class="mio-date" :style="{ ..._style }">
        <div v-if="props.label" class="mio-date-label">{{ props.label }}</div>
        <div class="mio-date-actions">
            <div class="mio-date-input">
                <input type="date" :value="modelValue" />
            </div>
            <div v-if="props.picker" class="mio-date-picker"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.mio-date {
    box-sizing: border-box;
    width: 300PX;
    min-width: 160PX;
    min-height: 38PX;
    max-height: 64PX;
    border-radius: 6PX;
    box-shadow: 0 0 12PX rgba(46, 46, 46, 0.1);
    background: rgba(255, 255, 255, 1);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    overflow: hidden;

    .mio-date-label {
        box-sizing: border-box;
        padding: 6PX 16PX 0 16PX;
        flex: 0 0 26PX;
        width: 100%;
        color: rgba(46, 46, 46, 0.6);
        font-size: 16PX;
        font-weight: 800;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .mio-date-actions {
        box-sizing: border-box;
        flex: 1;
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;

        .mio-date-input {
            box-sizing: border-box;
            flex: 1;
            height: 100%;
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;

            input[type="date"] {
                box-sizing: border-box;
                padding: 6PX 16PX;
                border: none;
                outline: none;
                width: 100%;
                height: 100%;
                background: transparent;
                color: rgba(46, 46, 46, 0.6);
                font-size: 14PX;
                font-weight: 800;
                display: flex;
                justify-content: flex-start;
                align-items: center;
            }
        }

        .mio-date-picker {
            box-sizing: border-box;
            flex: 0 0 32PX;
            height: 100%;
        }
    }
}
</style>

<script>
export default {
    name: "mio-table"
}
</script>

<script setup>
import Utils from "../../utils/index.js";
import { ref, provide, computed, onMounted } from "vue";

const props = defineProps({
    language: {
        type: String,
        default: "en-US"
    },
    width: {
        type: [ String, Number ],
        required: false,
        default: "auto"
    }
});

const UUID = Utils.General.GenerateUUID();
const Language = computed(() => props.language);
const Columns = ref([]);
const Rows = ref([]);

const _style = ref({});

provide("UUID", UUID);
provide("Language", Language);
provide("Columns", Columns);
provide("Rows", Rows);
provide("UpdateMethods", {
    FillColumns: _fillColumns,
    FillRows: _fillRows
});

function _fillColumns(prop, slot, title, width, fixed, align) {
    Columns.value.push({
        prop: prop,
        slot: slot,
        title: title,
        width: width,
        fixed: fixed,
        align: align
    });
}

function _fillRows(row) {
    Rows.value.push(row)
}

function _setStyle() {
    _style.value = {
        width: props.width + "PX"
    }
}

onMounted(() => {
    _setStyle();
})
</script>

<template>
    <div :id="'MiO-Table-' + UUID" class="mio-table" :style="{ ..._style }">
        <table>
            <slot name="default" />
        </table>
    </div>
</template>

<style lang="scss" scoped>
.mio-table {
    width: auto;
    box-sizing: border-box;
    border-radius: 6PX;
    box-shadow: 0 0 12PX rgba(46, 46, 46, 0.1);
    background: rgba(255, 255, 255, 1);
    overflow: auto;
    transition-duration: 0.5s;
    transition-timing-function: ease-in-out;
    transition-property: all;

    &::-webkit-scrollbar {
        width: 6PX;
        height: 6PX;
        opacity: 0;
    }

    &::-webkit-scrollbar-thumb {
        opacity: 0;
        border-radius: 10PX;
    }

    &:hover {
        &::-webkit-scrollbar {
            opacity: 1;
        }

        &::-webkit-scrollbar-thumb {
            opacity: 1;
            border-radius: 10PX;
            background-color: rgba(46, 46, 46, 0.2);
        }
    }

    table {
        min-width: 100%;
        height: 100%;
        background: inherit;
        margin: 20PX;
    }
}
</style>

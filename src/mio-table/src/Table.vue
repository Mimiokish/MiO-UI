<script>
export default {
    name: "mio-table"
}
</script>

<script setup>
import Utils from "../../utils/index.js";
import { ref, provide, computed } from "vue";

const props = defineProps({
    language: {
        type: String,
        default: "en-US"
    }
});

const UUID = Utils.General.GenerateUUID();
const Language = computed(() => props.language);
const Columns = ref([]);
const Rows = ref([]);

provide("UUID", UUID);
provide("Language", Language);
provide("Columns", Columns);
provide("Rows", Rows);
provide("UpdateMethods", {
    FillColumns: _fillColumns,
    FillRows: _fillRows
});

function _fillColumns(prop, slot, title) {
    Columns.value.push({
        prop: prop,
        slot: slot,
        title: title
    });
}

function _fillRows(row) {
    console.log(111, row)
    Rows.value.push(row)
}
</script>

<template>
    <div :id="'MiO-Table-' + UUID" class="mio-table">
        <table>
            <slot name="default" />
        </table>
    </div>
</template>

<style lang="scss" scoped>
.mio-table {
    min-width: 600PX;
    min-height: 200PX;
    padding: 20PX;
    border-radius: 6PX;
    box-shadow: 0 0 12PX rgba(46, 46, 46, 0.1);
    display: flex;
    justify-content: center;
    align-items: flex-start;

    table {
        width: 100%;
        height: 100%;
    }
}
</style>
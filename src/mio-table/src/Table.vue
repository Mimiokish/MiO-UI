<script>
export default {
    name: "mio-table"
}
</script>

<script setup>
import Utils from "../../utils/index.js";
import { ref, provide } from "vue";

const props = defineProps({
    data: {
        type: Array,
        required: true
    }
});

const UUID = Utils.GenerateUUID();
const columns = ref([]);

provide("updateMethods", {
    fillColumns: fillColumns
});

function fillColumns(prop, label, span, slot) {
    columns.value.push({
        prop: prop,
        label: label,
        span: span,
        slot: slot
    });
}
</script>

<template>
    <div :id="'MiO-Table-' + UUID" class="mio-table">
        <div :id="'MiO-Table-Header' + UUID" class="mio-table-header">
            <slot />
        </div>
        <div :id="'MiO-Table-Body' + UUID" class="mio-table-body">
            <div v-if="!props.data.length" class="mio-table-no-data">No Data</div>
            <template v-else>
                <div v-if="props.data.length <= 0" class="mio-table-no-data">No Data</div>
                <template v-else>
                    <div v-for="row in data" class="mio-table-row">
                        <template v-for="column in columns">
                            <div class="mio-table-column" :style="`flex: ${ column.span }`">
                                <template v-if="!column.slot">{{ row[column.prop] }}</template>
                                <template v-else>
                                    <component :is="column.slot" />
                                </template>
                            </div>
                        </template>
                    </div>
                </template>
            </template>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.mio-table {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    .mio-table-header {
        flex: 0 0 38PX;
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .mio-table-body {
        flex: 1;
        width: 100%;
        overflow: auto;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;

        .mio-table-row {
            flex: 0 0 26PX;
            width: 100%;
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;

            .mio-table-column {
                flex: 1;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }

        .mio-table-no-data {
            color: rgba(45, 45, 45, 0.6);
            font-size: 26PX;
            font-weight: 600;
        }
    }
}
</style>

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

const UUID = Utils.General.GenerateUUID();
const columns = ref([]);

provide("updateMethods", {
    fillColumns: fillColumns
});

function fillColumns(prop, label, span, slot, tooltip) {
    columns.value.push({
        prop: prop,
        label: label,
        span: span,
        slot: slot,
        tooltip: tooltip
    });
}
</script>

<template>
    <div :id="'MiO-Table-' + UUID" class="mio-table">
        <div :id="'MiO-Table-Header-' + UUID" class="mio-table-header">
            <slot />
        </div>
        <div :id="'MiO-Table-Body-' + UUID" class="mio-table-body">
            <div v-if="!props.data.length" class="mio-table-no-data">No Data</div>
            <template v-else>
                <div v-if="props.data.length <= 0" class="mio-table-no-data">No Data</div>
                <template v-else>
                    <div v-for="row in data" class="mio-table-row">
                        <template v-for="column in columns">
                            <div class="mio-table-column" :style="`flex: ${ column.span }`">
                                <mio-tooltip v-if="column.tooltip" :content="row[column.prop]">
                                    <div v-if="!column.slot">{{ row[column.prop] }}</div>
                                    <div v-else>
                                        <component :is="column.slot" :row="row" />
                                    </div>
                                </mio-tooltip>
                                <template v-else>
                                    <template v-if="!column.slot">{{ row[column.prop] }}</template>
                                    <template v-else>
                                        <component :is="column.slot" :row="row" />
                                    </template>
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
    border: 1PX solid rgba(46, 46, 46, 0.3);
    border-radius: 6PX;
    box-shadow: 0 0 12PX rgba(46, 46, 46, 0.1);

    .mio-table-header {
        flex: 0 0 38PX;
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .mio-table-body {
        box-sizing: border-box;
        padding: 10PX;
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
            border-bottom: 1PX dashed rgba(46, 46, 46, 0.3);
            border-top: 1PX dashed rgba(46, 46, 46, 0.3);

            .mio-table-column {
                box-sizing: border-box;
                flex: 1;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 16PX;
                font-weight: 500;
                color: rgba(46, 46, 46, 0.8);
                padding: 6PX 10PX;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                line-height: 26PX;
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

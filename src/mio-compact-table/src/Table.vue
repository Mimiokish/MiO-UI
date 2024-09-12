<script>
export default {
    name: "mio-compact-table"
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
const hints = {
    "no-data": {
        "en-US": "No Data",
        "zh-CN": "暂无数据"
    }
}

provide("UpdateMethods", {
    FillColumns: _fillColumns
});

function _fillColumns(prop, label, span, slot, fixed, tooltip) {
    columns.value.push({
        prop: prop,
        label: label,
        span: span,
        slot: slot,
        fixed: fixed,
        tooltip: tooltip
    });
}
</script>

<template>
    <div :id="'MiO-Compact-Table-' + UUID" class="mio-compact-table">
        <table :data="data">
            <thead class="mio-compact-table-header">
                <tr class="mio-compact-table-header-row">
                    <slot />
                </tr>
            </thead>
            <tbody v-if="!data || !data.length || data.length <= 0" class="mio-compact-table-body no-data">
                <tr>No Data</tr>
            </tbody>
            <tbody v-else class="mio-compact-table-body">
                <tr v-for="row in data" class="mio-compact-table-body-row">
                    <template v-for="column in columns">
                        <td class="mio-compact-table-body-column" :class="column.fixed ? 'fixed' : ''" :style="{ flex: column.span }">
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
                        </td>
                    </template>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style lang="scss" scoped>
.mio-compact-table {
    min-width: 600PX;
    min-height: 200PX;
    padding: 20PX;
    border-radius: 6PX;
    box-shadow: 0 0 12PX rgba(46, 46, 46, 0.1);
    display: flex;
    justify-content: center;
    align-items: flex-start;

    table, thead, tbody {
        padding: 0;
        margin: 0;
    }

    table {
        flex: 1;
        width: 100%;
        height: 100%;
        border: none;
        border-radius: 6PX;
    }

    .mio-compact-table-header {
        border-radius: 6PX;
        box-shadow: 0 0 12PX rgba(46, 46, 46, 0.1);

        .mio-compact-table-header-row {
        }
    }

    .mio-compact-table-body {
        &.no-data {
            width: 100%;
            height: 100%;
            color: rgba(46, 46, 46, 0.8);
            font-size: 16PX;
            font-weight: 800;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .mio-compact-table-body-row {
            border-bottom: 1PX dashed rgba(46, 46, 46, 0.3);

            .mio-compact-table-body-column {
                box-sizing: border-box;
                padding: 6PX 10PX;
                font-size: 12PX;
                font-weight: 600;
                color: rgba(46, 46, 46, 0.6);
                height: 36PX;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }
    }
}
</style>

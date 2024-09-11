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
const hints = {
    "no-data": {
        "en-US": "No Data",
        "zh-CN": "暂无数据"
    }
}

provide("updateMethods", {
    fillColumns: fillColumns
});

function fillColumns(prop, label, span, slot, fixed, tooltip) {
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
    <div :id="'MiO-Table-' + UUID" class="mio-table">
        <table :data="data">
            <thead class="mio-table-header">
                <tr class="mio-table-header-row">
                    <slot />
                </tr>
            </thead>
            <tbody v-if="!data || !data.length || data.length <= 0" class="mio-table-body no-data">
                <tr>No Data</tr>
            </tbody>
            <tbody v-else class="mio-table-body">
                <tr v-for="row in data" class="mio-table-body-row">
                    <template v-for="column in columns">
                        <td class="mio-table-body-column" :class="column.fixed ? 'fixed' : ''" :style="{ flex: column.span }">
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
.mio-table {
    flex: 1;
    width: 100%;
    height: 100%;
    border: 1PX solid rgba(46, 46, 46, 0.3);
    border-radius: 6PX;
    box-shadow: 0 0 12PX rgba(46, 46, 46, 0.1);

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

    .mio-table-header {
        .mio-table-header-row {
            display: flex;
            justify-content: flex-start;
            align-items: center;
        }
    }

    .mio-table-body {
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

        .mio-table-body-row {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            border-top: 1PX dashed rgba(46, 46, 46, 0.3);

            &:last-child {
                border-bottom: 1PX dashed rgba(46, 46, 46, 0.3);
            }

            .mio-table-body-column {
                box-sizing: border-box;
                padding: 6PX 10PX;
                color: rgba(46, 46, 46, 0.8);
                font-size: 16PX;
                font-weight: 500;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                display: flex;
                justify-content: flex-start;

                &.fixed {
                    margin-left: auto;
                }
            }
        }
    }
}
</style>

const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            columns: [
                {
                    key: "name",
                    label: {
                        "zh-CN": "姓名",
                        "en-US": "Name"
                    },
                    configs: {
                        span: 1
                    }
                },
                {
                    key: "date",
                    label: {
                        "zh-CN": "日期",
                        "en-US": "Date"
                    },
                    configs: {
                        span: 2
                    }
                },
                {
                    key: "actions",
                    label: {
                        "zh-CN": "操作",
                        "en-US": "Actions"
                    },
                    configs: {
                        span: 3
                    }
                }
            ],
            data: [
                {
                    name: "Mr. Smile",
                    date: "1724179771",
                }
            ]
        }
    },
    template: `
        <div style="width:100%; height: 100%; display: flex; flex-direction: column; justify-content: space-between;">
            <mio-table :data="data">
                <template v-for="column in columns" :key="'MiO-Table-Column-' + column.key">
                    <mio-table-column v-if="column.key === 'actions'" :prop="column.key" :label="column.label['zh-CN']" :span="column.configs.span">
                        <template #body>
                            <button>按钮</button>
                        </template>
                    </mio-table-column>
                    <mio-table-column v-else-if="column.key === 'date'" :prop="column.key" :label="column.label['zh-CN']" :span="column.configs.span">
                        <template #header>{{ column.label["zh-CN"] }}（yyyy-mm-dd）</template>
                    </mio-table-column>
                    <mio-table-column v-else :prop="column.key" :label="column.label['zh-CN']" :span="column.configs.span" />
                </template>
            </mio-table>
        </div>
    `,
    mounted() {
        setTimeout(() => {
            this.value = 3;
        }, 4000)
    }
});

mio_ui.MiOTable.install(app);

app.mount('#MiO-UI');

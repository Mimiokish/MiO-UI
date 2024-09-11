const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            lang: "en-US",
            label: {
                "en-US": "Switch to English",
                "zh-CN": "切换到中文"
            },
            columns: [
                {
                    key: "preview",
                    label: {
                        "zh-CN": "预览",
                        "en-US": "Preview"
                    },
                    configs: {
                        span: 1,
                        tooltip: false
                    }
                },
                {
                    key: "name",
                    label: {
                        "zh-CN": "姓名",
                        "en-US": "Name"
                    },
                    configs: {
                        span: 1,
                        tooltip: false
                    }
                },
                {
                    key: "date",
                    label: {
                        "zh-CN": "日期",
                        "en-US": "Date"
                    },
                    configs: {
                        span: 2,
                        tooltip: true
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
                    preview: "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg",
                    name: "Mr. Camera",
                    date: "1724179771",
                },
                {
                    preview: "https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg",
                    name: "Mr. Cat",
                    date: "1724179771",
                },
                {
                    preview: "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg",
                    name: "Mr. Camera",
                    date: "1724179771",
                }
            ],
            modalVis: false,
            modalLabel: {
                "en-US": "Preview",
                "zh-CN": "预览"
            },
            previewUrl: ""
        }
    },
    template: `
        <div style="width:100%; height: 100%; display: flex; flex-direction: column; justify-content: space-between;">
            <mio-button radius="medium" style="margin-bottom: 20PX;" @click="handleClick">{{ label[lang] }}</mio-button>
            <mio-table :data="data">
                <template v-for="column in columns" :key="'MiO-Table-Column-' + column.key">
                    <mio-table-column :prop="column.key" :label="column.label[lang]" :span="column.configs.span" :tooltip="column.configs.tooltip">
                        <template #header>
                            <template v-if="column.key === 'date'">
                                {{ column.label[lang] }}（yyyy-mm-dd）
                            </template>
                            <template v-else>{{ column.label[lang] }}</template>
                        </template>
                        <template #body="{ row }">
                            <template v-if="column.key === 'actions'">
                                <mio-button>按钮</mio-button>
                            </template>
                            <template v-else-if="column.key === 'preview'">
                                <div class="table-preview" :style="{ backgroundImage: 'url(' + row[column.key] + ')' }" @click="handlePreview(row[column.key])" />
                            </template>
                            <template v-else>{{ row[column.key] }}</template>
                        </template>
                    </mio-table-column>
                </template>
            </mio-table>
            <mio-modal v-model="modalVis">
                <mio-modal-header>{{ modalLabel[lang] }}</mio-modal-header>
                <mio-modal-body>
                    <div class="modal-preview" :style="{ backgroundImage: 'url(' + previewUrl + ')' }"></div>
                </mio-modal-body>
                <mio-modal-footer></mio-modal-footer>
            </mio-modal>
            <mio-table class="table-no-data" :data="[]" >
                <template v-for="column in columns" :key="'MiO-Table-Column-' + column.key">
                    <mio-table-column :prop="column.key" :label="column.label[lang]" :span="column.configs.span" :tooltip="column.configs.tooltip"/>
                </template>
            </mio-table>
            <mio-table :data="data">
                <template v-for="column in columns" :key="'MiO-Table-Column-' + column.key">
                    <mio-table-column v-if="column.key === 'actions'" :prop="column.key" :label="column.label[lang]" :span="column.configs.span">
                        <template #body>
                            <mio-button>按钮</mio-button>
                        </template>
                    </mio-table-column>
                    <mio-table-column v-else-if="column.key === 'date'" :prop="column.key" :label="column.label[lang]" :span="column.configs.span" :tooltip="column.configs.tooltip">
                        <template #header>{{ column.label[lang] }}（yyyy-mm-dd）</template>
                    </mio-table-column>
                    <mio-table-column v-else-if="column.key === 'preview'" :prop="column.key" :label="column.label[lang]" :span="column.configs.span">
                        <template #body="{ row }">
                            <div class="table-preview" :style="{ backgroundImage: 'url(' + row[column.key] + ')' }" @click="handlePreview(row[column.key])" />
                        </template>
                    </mio-table-column>
                    <mio-table-column v-else :prop="column.key" :label="column.label[lang]" :span="column.configs.span" :tooltip="column.configs.tooltip" />
                </template>
            </mio-table>
        </div>
    `,
    methods: {
        handlePreview(url) {
            console.log(3434, url)
            this.previewUrl = url;
            this.modalVis = true;
        },
        handleClick() {
            this.lang = this.lang === "en-US" ? "zh-CN" : "en-US";
        }
    }
});

MiOUI.MiOButton.install(app);
MiOUI.MiOTooltip.install(app);
MiOUI.MiOTable.install(app);
MiOUI.MiOModal.install(app);

app.mount('#MiO-UI');

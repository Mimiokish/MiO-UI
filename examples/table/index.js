const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            lang: "en-US",
            label: {
                "en-US": "切换到中文",
                "zh-CN": "Switch to English"
            },
            compactColumns: [
                {
                    key: "preview",
                    label: {
                        "zh-CN": "预览",
                        "en-US": "Preview"
                    },
                    configs: {
                        span: 1,
                        tooltip: false,
                        fixed: false
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
                        tooltip: false,
                        fixed: false
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
                        tooltip: true,
                        fixed: false
                    }
                },
                {
                    key: "actions",
                    label: {
                        "zh-CN": "操作",
                        "en-US": "Actions"
                    },
                    configs: {
                        span: 3,
                        fixed: true
                    }
                }
            ],
            compactData: [
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
                    name: "Mr. Loooooooooonnnnnnnnnnnnnnnnmmg",
                    date: "1724179771",
                }
            ],
            columns: [
                {
                    key: "name",
                    label: {
                        "zh-CN": "姓名",
                        "en-US": "Name"
                    },
                    configs: {
                    }
                },
                {
                    key: "date",
                    label: {
                        "zh-CN": "日期",
                        "en-US": "Date"
                    },
                    configs: {
                    }
                }
            ],
            columnsCustom: [
                {
                    key: "preview",
                    label: {
                        "zh-CN": "预览",
                        "en-US": "Preview"
                    },
                    configs: {
                        width: 80
                    }
                },
                {
                    key: "name",
                    label: {
                        "zh-CN": "姓名",
                        "en-US": "Name"
                    },
                    configs: {
                        width: "200",
                        align: "left"
                    }
                },
                {
                    key: "location",
                    label: {
                        "zh-CN": "位置",
                        "en-US": "Location"
                    },
                    configs: {
                        width: "200",
                        align: "left"
                    }
                },
                {
                    key: "count",
                    label: {
                        "zh-CN": "计数",
                        "en-US": "Count"
                    },
                    configs: {
                        width: "200",
                        align: "left",
                        fixed: "right"
                    }
                },
                {
                    key: "description",
                    label: {
                        "zh-CN": "描述",
                        "en-US": "Description"
                    },
                    configs: {
                        width: "200",
                        align: "left"
                    }
                },
                {
                    key: "date",
                    label: {
                        "zh-CN": "日期",
                        "en-US": "Date"
                    },
                    configs: {
                        width: "200",
                        align: "left"
                    }
                },
                {
                    key: "actions",
                    label: {
                        "zh-CN": "操作",
                        "en-US": "Actions"
                    },
                    configs: {
                        width: "200",
                        align: "center",
                        fixed: "right"
                    }
                }
            ],
            rows: [
                {
                    name: "Mr. Camera",
                    date: "1724179771",
                },
                {
                    date: "1724179771",
                    name: "Mr. Cat",
                },
                {
                    name: "Mr. Loooooooooonnnnnnnnnnnnnnnnmmg",
                    date: "1724179771",
                }
            ],
            rowsCustom: [
                {
                    preview: "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg",
                    name: "Mr. Camera",
                    date: "1724179771",
                    count: 4,
                    description: "this is a description",
                    location: "a place"
                },
                {
                    name: "Mr. Cat",
                    preview: "https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg",
                    date: "1724179771",
                    count: 4,
                    description: "this is a description",
                    location: "a place"
                },
                {
                    date: "1724179771",
                    name: "Mr. Loooooooooonnnnnnnnnnnnnnnnmmg",
                    preview: "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg",
                    count: 4,
                    description: "this is a description",
                    location: "a place"
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
        <div class="showcase">
            <mio-button radius="medium" style="margin-bottom: 20PX;" @click="handleClick">{{ label[lang] }}</mio-button>
            <mio-divider label="Table" />
            <mio-table :language="lang">
                <mio-table-header>
                    <mio-table-column v-for="column in columns" :prop="column.key" :title="column.label[lang]" />
                </mio-table-header>
                <mio-table-body>
                    <mio-table-row v-for="row in rows" :row="row">
                        <mio-table-cell v-for="(cell, keyCell) in row" :prop="keyCell" :label="cell" />
                    </mio-table-row>
                </mio-table-body>
            </mio-table>
            <mio-table class="table-custom-cell" :language="lang" width="500">
                <mio-table-header>
                    <template v-for="column in columnsCustom">
                        <mio-table-column v-if="column.key === 'date'" :prop="column.key" :width="column.configs.width" :fixed="column.configs.fixed" :align="column.configs.align">{{ column.label[lang] }}（yyyy-mm-dd）</mio-table-column>
                        <mio-table-column v-else :prop="column.key" :title="column.label[lang]" :width="column.configs.width" :fixed="column.configs.fixed" :align="column.configs.align" />
                    </template>
                </mio-table-header>
                <mio-table-body>
                    <mio-table-row v-for="row in rowsCustom" :row="row">
                        <template v-for="column in columnsCustom">
                            <mio-table-cell v-if="column.key === 'actions'" :prop="column.key" :width="column.configs.width" :fixed="column.configs.fixed" :align="column.configs.align">
                                <mio-button>{{ modalLabel[lang] }}</mio-button>
                            </mio-table-cell>
                            <mio-table-cell v-else-if="column.key === 'preview'" :prop="column.key" :width="column.configs.width" :align="column.configs.align">
                                <div class="table-preview" :style="{ backgroundImage: 'url(' + row[column.key] + ')' }" @click="handlePreview(row[column.key])"></div>
                            </mio-table-cell>
                            <mio-table-cell v-else :prop="column.key" :label="row[column.key]" :width="column.configs.width" :align="column.configs.align" />
                        </template>
                    </mio-table-row>
                </mio-table-body>
            </mio-table>
            <mio-divider label="Compact Table" />
            <mio-compact-table :data="compactData">
                <template v-for="column in compactColumns">
                    <mio-compact-table-column :prop="column.key" :label="column.label[lang]" :span="column.configs.span" :tooltip="column.configs.tooltip" :fixed="column.configs.fixed">
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
                    </mio-compact-table-column>
                </template>
            </mio-compact-table>
            <mio-compact-table class="table-no-data" :data="[]" >
                <template v-for="column in columns">
                    <mio-table-column :prop="column.key" :label="column.label[lang]" :span="column.configs.span" :tooltip="column.configs.tooltip"/>
                </template>
            </mio-compact-table>
            <mio-table :data="data">
                <template v-for="column in columns">
                    <mio-compact-table-column v-if="column.key === 'actions'" :prop="column.key" :label="column.label[lang]" :span="column.configs.span">
                        <template #body>
                            <mio-button>按钮</mio-button>
                        </template>
                    </mio-compact-table-column>
                    <mio-compact-table-column v-else-if="column.key === 'date'" :prop="column.key" :label="column.label[lang]" :span="column.configs.span" :tooltip="column.configs.tooltip">
                        <template #header>{{ column.label[lang] }}（yyyy-mm-dd）</template>
                    </mio-compact-table-column>
                    <mio-compact-table-column v-else-if="column.key === 'preview'" :prop="column.key" :label="column.label[lang]" :span="column.configs.span">
                        <template #body="{ row }">
                            <div class="table-preview" :style="{ backgroundImage: 'url(' + row[column.key] + ')' }" @click="handlePreview(row[column.key])" />
                        </template>
                    </mio-compact-table-column>
                    <mio-compact-table-column v-else :prop="column.key" :label="column.label[lang]" :span="column.configs.span" :tooltip="column.configs.tooltip" />
                </template>
            </mio-table>
            <mio-modal v-model="modalVis">
                <mio-modal-header>{{ modalLabel[lang] }}</mio-modal-header>
                <mio-modal-body>
                    <div class="modal-preview" :style="{ backgroundImage: 'url(' + previewUrl + ')' }"></div>
                </mio-modal-body>
                <mio-modal-footer></mio-modal-footer>
            </mio-modal>
        </div>
    `,
    methods: {
        handlePreview(url) {
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
MiOUI.MiOCompactTable.install(app);
MiOUI.MiOTable.install(app);
MiOUI.MiOModal.install(app);
MiOUI.MiODivider.install(app);

app.mount('#MiO-UI');

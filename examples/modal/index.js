const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            lang: "en-US",
            label: {
                "en-US": "Switch to English",
                "zh-CN": "切换到中文"
            },
            preMadeVis: false,
            preMadeLabel: {
                "en-US": "Open Pre-made Modal",
                "zh-CN": "打开预制弹窗"
            },
            customVis: false,
            customLabel: {
                "en-US": "Open Custom Modal",
                "zh-CN": "打开自定义弹窗"
            }
        }
    },
    template: `
        <div style="width:100%; height: 100%; display: flex; flex-direction: column; align-items: center">
            <mio-button radius="medium" style="margin-bottom: 20PX;" @click="handleClick">{{ label[lang] }}</mio-button>
            <mio-button @click="preMadeVis = !preMadeVis">{{ preMadeLabel[lang] }}</mio-button>
            <mio-modal v-model="preMadeVis">
                <mio-modal-header>This is Header</mio-modal-header>
                <mio-modal-body>test</mio-modal-body>
                <mio-modal-footer></mio-modal-footer>
            </mio-modal>
            <mio-button class="button-custom" @click="customVis = !customVis">{{ customLabel[lang] }}</mio-button>
            <mio-modal v-model="customVis">
                <template #header>
                    <div class="custom-modal-header">
                        <div class="custom-modal-title">Preview</div>
                        <mio-button class="custom-modal-action" @click="customVis = false">&#10006;</mio-button>
                    </div>
                </template>
                <template #body>
                    <div class="custom-modal-body">
                        <div class="custom-modal-image"></div>
                    </div>
                </template>
            </mio-modal>
        </div>
    `,
    methods: {
        handleClick() {
            this.lang = this.lang === "en-US" ? "zh-CN" : "en-US";
        }
    },
    mounted() {}
});

MiOUI.MiOButton.install(app);
MiOUI.MiOModal.install(app);

app.mount('#MiO-UI');

const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            lang: "en-US",
            label: {
                "en-US": "Switch to English",
                "zh-CN": "切换到中文"
            },
            content: {
                "en-US": "This is a tooltip showcase",
                "zh-CN": "这是一个提示工具展示"
            }
        }
    },
    template: `
        <div style="width:100%; height: 100%; display: flex; flex-direction: column; align-items: center">
            <div class="top" style="flex: 1; width: 100%; display: flex; justify-content: center; align-items: flex-start;">
                <mio-tooltip :content="content[lang]" :offset="20">
                    <div style="width: 50PX; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">{{ content[lang] }}</div>
                </mio-tooltip>
                <mio-tooltip :content="content[lang]" placement="top">
                    <div style="width: 50PX; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">{{ content[lang] }}</div>
                </mio-tooltip>
            </div>
            <div style="flex: 1; width: 100%; display: flex;">
                <div class="left" style="flex: 1; height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: flex-start;">
                    <mio-tooltip :content="content[lang]" :offset="20">
                        <div style="width: 50PX; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">{{ content[lang] }}</div>
                    </mio-tooltip>
                    <mio-tooltip :content="content[lang]" placement="left">
                        <div style="width: 50PX; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">{{ content[lang] }}</div>
                    </mio-tooltip>
                </div>
                <div class="center" style="flex: 1; height: 100%; display: flex; justify-content: center; align-items: center">
                    <mio-button radius="medium" style="margin-bottom: 20PX;" @click="handleClick">{{ label[lang === "en-US" ? "zh-CN" : "en-US"] }}</mio-button>
                </div>
                <div class="right" style="flex: 1; height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: flex-end;">
                    <mio-tooltip :content="content[lang]" :offset="20">
                        <div style="width: 50PX; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">{{ content[lang] }}</div>
                    </mio-tooltip>
                    <mio-tooltip :content="content[lang]" placement="right">
                        <div style="width: 50PX; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">{{ content[lang] }}</div>
                    </mio-tooltip>
                </div>
            </div>
            <div class="bottom" style="flex: 1; width: 100%; display: flex; justify-content: center; align-items: flex-end;">
                <mio-tooltip :content="content[lang]" :offset="20">
                    <div style="width: 50PX; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">{{ content[lang] }}</div>
                </mio-tooltip>
                <mio-tooltip :content="content[lang]" placement="bottom">
                    <div style="width: 50PX; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">{{ content[lang] }}</div>
                </mio-tooltip>
            </div>
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
MiOUI.MiOTooltip.install(app);

app.mount('#MiO-UI');

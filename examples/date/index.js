const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            lang: "en-US",
            label: {
                "en-US": "Switch to English",
                "zh-CN": "切换到中文"
            }
        }
    },
    template: `
        <div class="showcase">
            <mio-button radius="medium" style="margin-bottom: 20PX;" @click="handleClick">{{ label[lang === "en-US" ? "zh-CN" : "en-US"] }}</mio-button>
            <mio-divider label="Date | default" />
            <mio-date width="50" />     <!-- width only support 160 or above -->
            <mio-divider label="Date | with label" />
            <mio-date label="Enter a date" width="160" />
            <mio-divider label="Date | with a picker" />
            <mio-date label="Pick a date" :picker="true" />
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
MiOUI.MiODivider.install(app);
MiOUI.MiODate.install(app);

app.mount('#MiO-UI');

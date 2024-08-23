const { createApp } = Vue;

const app = createApp({
    template: `
        <div style="width:100%; height: 100%;">
            <mio-button style="margin-right: 10PX;">默认</mio-button>
            <mio-button radius="small" style="margin-right: 10PX;">圆角</mio-button>
            <mio-button radius="medium" style="margin-right: 10PX;">圆角</mio-button>
            <mio-button radius="large" style="margin-right: 10PX;">圆角</mio-button>
            <mio-button :disabled="true" style="margin-right: 10PX;">禁用</mio-button>
        </div>
    `
});

mio_ui.MiOButton.install(app);

app.mount('#MiO-UI');

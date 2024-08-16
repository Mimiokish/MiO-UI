const { createApp } = Vue;

const app = createApp({
    data() {
        return {}
    },
    template: `
        <div style="width:100%; height: 100%; display: flex; flex-direction: column; justify-content: space-between;">
            <mio-svg src="./assets/user_icon.svg" />
        </div>
    `
});

mio_ui.MiOSvg.install(app);

app.mount('#MiO-UI');

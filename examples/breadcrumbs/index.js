const { createApp } = Vue;

const app = createApp({
    data() {
        return {}
    },
    template: `
        <div style="width:200PX; height: 100%; display: flex;">
            <mio-breadcrumbs></mio-breadcrumbs>
        </div>
    `
});

mio_ui.MiOBreadcrumbs.install(app);

app.mount('#MiO-UI');

const { createApp } = Vue;

const app = createApp({
    data() {
        return {}
    },
    template: `
        <div style="width:100%; height: 100%; display: flex;">
            <mio-breadcrumbs separator="/">
                <mio-breadcrumb-item>Level One</mio-breadcrumb-item>
                <mio-breadcrumb-item>Level Two</mio-breadcrumb-item>
                <mio-breadcrumb-item :active="true">Level Three</mio-breadcrumb-item>
            </mio-breadcrumbs>
        </div>
    `
});

mio_ui.MiOBreadcrumbs.install(app);

app.mount('#MiO-UI');

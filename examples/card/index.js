const { createApp } = Vue;

const app = createApp({
    data() {
        return {}
    },
    template: `
        <div style="width:200PX; height: 100%; display: flex;">
            <mio-card>
                <mio-card-header></mio-card-header>
                <mio-card-body></mio-card-body>
            </mio-card>
        </div>
    `
});

mio_ui.MiOCard.install(app);

app.mount('#MiO-UI');

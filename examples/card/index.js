const { createApp } = Vue;

const app = createApp({
    data() {
        return {}
    },
    template: `
        <div style="width:200PX; height: 100%; display: flex;">
            <mio-card>
                <mio-card-header>
                    This is a card header
                </mio-card-header>
                <mio-card-body>
                    This is a card body
                </mio-card-body>
                <mio-card-footer>
                    This is a card footer
                </mio-card-footer>
            </mio-card>
        </div>
    `
});

MiOUI.MiOCard.install(app);

app.mount('#MiO-UI');

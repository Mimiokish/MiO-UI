const { createApp } = Vue;

const app = createApp({
    template: `
        <div style="width:100%; height: 64PX; display: flex;">
            <mio-layouts>
                <mio-layout-item width="200PX">
                    Part One with 260PX Width
                </mio-layout-item>
                <mio-layout-item width="1">
                    Part Two with Fixed Width
                </mio-layout-item>
                <mio-layout-item width="300PX">
                    Part Three with 300PX Width
                </mio-layout-item>
            </mio-layouts>
        </div>
    `
});

MiOUI.MiOLayouts.install(app);

app.mount('#MiO-UI');

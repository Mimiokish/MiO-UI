const { createApp } = Vue;

const app = createApp({
    template: `
        <div style="width:100%; height: 100%; display: flex; flex-direction: column; justify-content: space-between;">
        </div>
    `
});

mio_ui.MiODropdown.install(app);

app.mount('#MiO-UI');

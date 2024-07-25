const { createApp } = Vue;

const app = createApp({
    template: `
        <div style="width:100%; height: 100%; display: flex; flex-direction: column;">Welcome to MiO</div>
    `
});

app.mount('#MiO-UI');
const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            value: "",
            options: [
                {
                    label: "Option 1",
                    value: 1
                },
                {
                    label: "Option 2",
                    value: 2
                },
                {
                    label: "Option 3",
                    value: 3
                },
                {
                    label: "Option 4",
                    value: 4
                },
                {
                    label: "Option 5",
                    value: 5
                },
                {
                    label: "Option 6",
                    value: 6
                },
                {
                    label: "Option 7",
                    value: 7
                },
                {
                    label: "Option 8",
                    value: 8
                },
                {
                    label: "Option 9",
                    value: 9
                }
            ]
        }
    },
    template: `
        <div style="width:100%; height: 100%; display: flex; flex-direction: column; justify-content: space-between;">
            <div>
                <mio-select v-model="value">
                    <mio-select-option v-for="option in options" :key="'select-option-' + option.key" :value="option.value" :label="option.label"></mio-select-option>
                </mio-select>
            </div>
            <div>{{ value }}</div>
            <div>
                <mio-select v-model="value">
                    <mio-select-option v-for="option in options" :key="'select-option-' + option.key" :value="option.value" :label="option.label"></mio-select-option>
                </mio-select>
            </div>
        </div>
    `,
    mounted() {
        setTimeout(() => {
            this.value = 3;
        }, 4000)
    }
});

mio_ui.MiOSelect.install(app);

app.mount('#MiO-UI');

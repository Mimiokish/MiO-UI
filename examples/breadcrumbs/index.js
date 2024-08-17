const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            items: [
            ]
        }
    },
    template: `
        <div style="width:100%; height: 100%; display: flex;">
            <mio-breadcrumbs separator="/">
                <template v-for="item in items">
                    <mio-breadcrumb-item :active="item.active">{{ item.label }}</mio-breadcrumb-item>
                </template>
            </mio-breadcrumbs>
        </div>
    `,
    mounted() {
        setTimeout(() => {
            this.items.push({
                label: "Level One",
                active: false
            });
            this.items.push({
                label: "Level Two",
                active: false
            });
            this.items.push({
                label: "Level Three",
                active: true
            });

            setTimeout(() => {
                this.items[2].active = false;

                this.items.push({
                    label: "Level Four",
                    active: true
                });
            }, 2000)
        }, 2000);
    }
});

mio_ui.MiOBreadcrumbs.install(app);

app.mount('#MiO-UI');

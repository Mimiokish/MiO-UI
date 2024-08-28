const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            list: [
                {
                    label: "List 1"
                },
                {
                    label: "List 2",
                    children: [
                        {
                            label: "List 2-1"
                        },
                        {
                            label: "List 2-2"
                        },
                        {
                            label: "List 2-3",
                            children: [
                                {
                                    label: "List 2-3-1"
                                },
                                {
                                    label: "List 2-3-2"
                                },
                                {
                                    label: "List 2-3-3"
                                },
                                {
                                    label: "List 2-3-4444444444444444444444444444"
                                }
                            ]
                        }
                    ]
                },
                {
                    label: "List 3",
                    children: [
                        {
                            label: "List 3-1"
                        },
                        {
                            label: "List 3-2"
                        },
                        {
                            label: "List 3-3",
                            children: [
                                {
                                    label: "List 3-3-1"
                                },
                                {
                                    label: "List 3-3-2"
                                },
                                {
                                    label: "List 3-3-3"
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    template: `
        <div style="width:200PX; height: 100%; display: flex;">
            <mio-list mode="accordion">
<!--                <mio-list-item v-for="(item, index) in list" :marker="(index + 1).toString()" :item="item" />-->
                <mio-list-item v-for="item in list" :item="item" />
            </mio-list>
        </div>
    `
});

MiOUI.MiOList.install(app);

app.mount('#MiO-UI');

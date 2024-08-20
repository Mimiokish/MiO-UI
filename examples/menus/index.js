const { createApp, defineComponent } = Vue;

const MenuHome = defineComponent({
    template: `
        <div>Menu Home</div>
    `
})
const MenuItem_3 = defineComponent({
    template: `
        <div>Menu Item 3</div>
    `
})
const MenuItem_3_1 = defineComponent({
    template: `
        <div>Menu Item 3-1</div>
    `
})

const routes = [
    {
        path: "/",
        component: MenuHome
    },
    {
        path: "/menu-3",
        component: MenuItem_3
    },
    {
        path: "/menu-3-1",
        component: MenuItem_3_1
    }
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes
});

const app = createApp({
    data() {
        return {
            menus: [
                {
                    label: {
                        "en-US": "Menu | 1",
                        "zh-CN": "菜单 | 1"
                    },
                    path: "/",
                    url: ""
                },
                {
                    label: {
                        "en-US": "Menu | 2",
                        "zh-CN": "菜单 | 2"
                    },
                    path: "",
                    url: "https://www.google.com"
                },
                {
                    label: {
                        "en-US": "Menu | 3",
                        "zh-CN": "菜单 | 3"
                    },
                    path: "/menu-3",
                    children: [
                        {
                            label: {
                                "en-US": "Menu | 3-1",
                                "zh-CN": "菜单 | 3-1"
                            },
                            path: "/menu-3-1"
                        },
                        {
                            label: {
                                "en-US": "Menu | 3-2",
                                "zh-CN": "菜单 | 3-2"
                            },
                            children: [
                                {
                                    label: {
                                        "en-US": "Menu | 3-2-1",
                                        "zh-CN": "菜单 | 3-2-1"
                                    },
                                    url: "https://www.iconfinder.com"
                                },
                                {
                                    label: {
                                        "en-US": "Menu | 3-2-2",
                                        "zh-CN": "菜单 | 3-2-2"
                                    },
                                    url: "https://www.toptal.com/designers/htmlarrows/symbols"
                                },
                                {
                                    label: {
                                        "en-US": "Menu | 3-2-3",
                                        "zh-CN": "菜单 | 3-2-3"
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    template: `
        <div style="width: 100%; height: 100%; display: flex;">
            <div style="flex: 0 0 260PX; height: 100%; display: flex; flex-direction: column;">
                <mio-menus>
                    <mio-menu-item index="1">
                        <template #icon>&#8452;</template>
                        <template #label>Menu | 1</template>
                    </mio-menu-item>
                    <mio-menu-item index="2">
                        <div class="menu-icon">&#8457;</div>
                        <div class="menu-label">Menu | 2</div>
                    </mio-menu-item>
                    <mio-menu-collapse index="3">
                        <template #title>
                            <div class="menu-icon">&#8456;</div>
                            <div class="menu-label">Menu | 3</div>
                        </template>
                        <template #content>
                            <mio-menu-item index="3-1">
                                <div class="menu-icon">&#8449;</div>
                                <div class="menu-label">Menu | 3-1</div>
                            </mio-menu-item>
                            <mio-menu-item index="3-2">
                                <div class="menu-icon">&#8455;</div>
                                <div class="menu-label">Menu | 3-2</div>
                            </mio-menu-item>
                            <mio-menu-item index="3-3">
                                <div class="menu-icon">&#8468;</div>
                                <div class="menu-label">Menu | 3-3</div>
                            </mio-menu-item>
                        </template>
                    </mio-menu-collapse>
                </mio-menus>
                <div style="display: flex; justify-content: center; align-items: center; width: 100%; height: 60PX;">----------divider----------</div>
                <mio-menus>
                    <template v-for="(menu, idxMenu) in menus" :key="'menu-' + idxMenu">
                        <mio-menu-item v-if="!menu.children" :index="(idxMenu + 1)" :url="menu.url" :path="menu.path">
                            <div class="menu-icon">&#8457;</div>
                            <div class="menu-label">{{ menu.label["zh-CN"] }}</div>
                        </mio-menu-item>
                        <mio-menu-collapse v-else :index="(idxMenu + 1)" :url="menu.url" :path="menu.path">
                            <template #title>
                                <div class="menu-icon">&#8456;</div>
                                <div class="menu-label">{{ menu.label["zh-CN"] }}</div>
                            </template>
                            <template #content>
                                <template v-for="(child, idxChild) in menu.children" :key="'menu-child-' + idxChild">
                                    <mio-menu-item v-if="!child.children" :index="(idxMenu + 1) + '-' + (idxChild + 1)" :url="child.url" :path="child.path">
                                        <div class="menu-label">{{ child.label["zh-CN"] }}</div>
                                    </mio-menu-item>
                                    <mio-menu-collapse v-else :index="(idxMenu + 1) + '-' + (idxChild + 1)" :url="child.url" :path="child.path">
                                        <template #title>
                                            <div class="menu-label">{{ child.label["zh-CN"] }}</div>
                                        </template>
                                        <template #content>
                                            <template v-for="(grand, idxGrand) in child.children" :key="'menu-grand-' + idxGrand">
                                                <mio-menu-item :url="grand.url" :path="grand.path" :index="(idxMenu + 1) + '-' + (idxChild + 1) + '-' + (idxGrand + 1)">
                                                    <div class="menu-label">{{ grand.label["zh-CN"] }}</div>
                                                </mio-menu-item>
                                            </template>
                                        </template>
                                    </mio-menu-collapse>
                                </template>
                            </template>
                        </mio-menu-collapse>
                    </template>
                </mio-menus>
            </div>
            <div style="flex: 1; height: 100%">
                <router-view></router-view>
            </div>
        </div>
    `
});

mio_ui.MiOMenus.install(app);

app.use(router);
app.mount('#MiO-UI');

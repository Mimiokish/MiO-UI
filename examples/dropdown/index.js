const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            menu: [
                {
                    key: 'setting',
                    label: {
                        "en-US": "Setting",
                        "zh-CN": "设置"
                    },
                    fn: this.handleSetting
                },
                {
                    key: 'help',
                    label: {
                        "en-US": "Help",
                        "zh-CN": "帮助"
                    },
                    fn: this.handleHelp
                },
                {
                    key: 'logout',
                    label: {
                        "en-US": "Logout",
                        "zh-CN": "退出"
                    },
                    fn: this.handleLogout
                }
            ]
        }
    },
    methods: {
        handleSetting() {
            console.log('Settings');
        },
        handleHelp() {
            console.log('Help');
        },
        handleLogout() {
            console.log('Logout');
        }
    },
    template: `
        <div style="width:100%; height: 100%; display: flex; flex-direction: column; justify-content: space-between;">
            <mio-dropdown>
                <mio-dropdown-trigger>Trigger</mio-dropdown-trigger>
                <mio-dropdown-menu>
                    <template v-for="(item, idxMenu) in menu" :key="'MiO-Dropdown-Menu-Item-' + idxMenu">
                        <mio-dropdown-menu-item v-if="item.key === 'logout'" @click="item.fn">
                            {{ item.label['en-US'] }}
                        </mio-dropdown-menu-item>
                        <mio-dropdown-menu-item v-else :label="item.label['en-US']" @click="item.fn"></mio-dropdown-menu-item>
                    </template>
                </mio-dropdown-menu>
            </mio-dropdown>
            <mio-dropdown width="200PX">
                <mio-dropdown-trigger>
                    <template #label>Trigger with icon</template>
                    <template #icon>&#10094;</template>
                </mio-dropdown-trigger>
                <mio-dropdown-menu>
                    <template v-for="(item, idxMenu) in menu" :key="'MiO-Dropdown-Menu-Item-' + idxMenu">
                        <mio-dropdown-menu-item v-if="item.key === 'logout'" @click="item.fn">
                            {{ item.label['en-US'] }}
                        </mio-dropdown-menu-item>
                        <mio-dropdown-menu-item v-else :label="item.label['en-US']" @click="item.fn"></mio-dropdown-menu-item>
                    </template>
                </mio-dropdown-menu>
            </mio-dropdown>
        </div>
    `
});

mio_ui.MiODropdown.install(app);

app.mount('#MiO-UI');

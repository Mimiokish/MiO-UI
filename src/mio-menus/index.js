import Menu from "./src/Menu.vue";
import MenuCollapse from "./src/MenuCollapse.vue";
import MenuItem from "./src/MenuItem.vue";

Menu.install = (app) => {
    app.component(Menu.name, Menu);
    app.component(MenuCollapse.name, MenuCollapse);
    app.component(MenuItem.name, MenuItem);
};

export default Menu;

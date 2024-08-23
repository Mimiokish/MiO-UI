import Dropdown from "./src/Dropdown.vue";
import DropdownTrigger from "./src/DropdownTrigger.vue";
import DropdownMenu from "./src/DropdownMenu.vue";
import DropdownMenuItem from "./src/DropdownMenuItem.vue";

Dropdown.install = (app) => {
    app.component(Dropdown.name, Dropdown);
    app.component(DropdownTrigger.name, DropdownTrigger);
    app.component(DropdownMenu.name, DropdownMenu);
    app.component(DropdownMenuItem.name, DropdownMenuItem);
};

export default Dropdown;

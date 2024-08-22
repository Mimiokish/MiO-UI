import Dropdown from "./src/Dropdown.vue";

Dropdown.install = (app) => {
    app.component(Dropdown.name, Dropdown);
};

export default Dropdown;
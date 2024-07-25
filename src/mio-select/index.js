import Select from "./src/Select.vue";
import SelectOption from "./src/SelectOption.vue";

Select.install = (app) => {
    app.component(Select.name, Select);
    app.component(SelectOption.name, SelectOption);
};

export default Select;

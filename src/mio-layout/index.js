import Layouts from "./src/Layouts.vue";
import LayoutItem from "./src/LayoutItem.vue";

Layouts.install = (app) => {
    app.component(Layouts.name, Layouts);
    app.component(LayoutItem.name, LayoutItem);
};

export default Layouts;

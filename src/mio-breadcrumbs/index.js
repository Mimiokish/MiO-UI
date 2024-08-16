import Breadcrumbs from "./src/Breadcrumbs.vue";
import BreadcrumbItem from "./src/BreadcrumbItem.vue";

Breadcrumbs.install = (app) => {
    app.component(Breadcrumbs.name, Breadcrumbs);
    app.component(BreadcrumbItem.name, BreadcrumbItem);
};

export default Breadcrumbs;

import Tooltip from "./src/Tooltip.vue";

Tooltip.install = function(Vue) {
    Vue.component(Tooltip.name, Tooltip);
};

export default Tooltip;

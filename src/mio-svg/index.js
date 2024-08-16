import SVG from "./src/SVG.vue";

SVG.install = (app) => {
    app.component(SVG.name, SVG);
};

export default SVG;

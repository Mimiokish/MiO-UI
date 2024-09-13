import Date from "./src/Date.vue";

Date.install = (app) => {
    app.component(Date.name, Date);
};

export default Date;

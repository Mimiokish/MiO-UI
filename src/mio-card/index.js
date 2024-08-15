import Card from "./src/Card.vue";

Card.install = (app) => {
    app.component(Card.name, Card);
};

export default Card;

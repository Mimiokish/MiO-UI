import Card from "./src/Card.vue";
import CardHeader from "./src/CardHeader.vue";
import CardBody from "./src/CardBody.vue";
import CardFooter from "./src/CardFooter.vue";

Card.install = (app) => {
    app.component(Card.name, Card);
    app.component(CardHeader.name, CardHeader);
    app.component(CardBody.name, CardBody);
    app.component(CardFooter.name, CardFooter);
};

export default Card;

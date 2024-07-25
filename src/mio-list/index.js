import List from './src/List.vue';
import ListItem from './src/ListItem.vue';

List.install = (app) => {
    app.component(List.name, List);
    app.component(ListItem.name, ListItem);
};

export default List;

import Table from './src/Table.vue';
import TableColumn from "./src/TableColumn.vue";

Table.install = (app) => {
    app.component(Table.name, Table);
    app.component(TableColumn.name, TableColumn);
};

export default Table;

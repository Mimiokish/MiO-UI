import Table from "./src/Table.vue";
import TableHeader from "./src/TableHeader.vue";
import TableBody from "./src/TableBody.vue";
import TableColumn from "./src/TableColumn.vue";
import TableRow from "./src/TableRow.vue";
import TableCell from "./src/TableCell.vue";

Table.install = (app) => {
    app.component(Table.name, Table);
    app.component(TableHeader.name, TableHeader);
    app.component(TableBody.name, TableBody);
    app.component(TableColumn.name, TableColumn);
    app.component(TableRow.name, TableRow);
    app.component(TableCell.name, TableCell);
};

export default Table;

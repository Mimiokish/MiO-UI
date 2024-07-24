import Tree from './src/Tree.vue';

Tree.install = (app) => {
    app.component(Tree.name, Tree);
};

export default Tree;

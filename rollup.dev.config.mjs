import plugin_resolve from "@rollup/plugin-node-resolve";
import plugin_vue from "rollup-plugin-vue";
import plugin_babel from "@rollup/plugin-babel";
import plugin_serve from "rollup-plugin-serve";

export default {
    input: "src/index.js",
    output: {
        name: "MiO-UI",
        format: 'iife',
        file: 'static/dist/mio-ui.js',
        extend: true,
        globals: {
            vue: "Vue"
        }
    },
    external: [
        "vue"
    ],
    plugins: [
        plugin_resolve(),
        plugin_vue(),
        plugin_babel({
            babelHelpers: "bundled",
            exclude: "node_modules/**"
        }),
        plugin_serve({
            contentBase: "static",
            headers: {
                "Access-Control-Allow-Origin": "*"
            },
            mimeTypes: {
                'application/javascript': ['js', 'mjs']
            },
            onListening: function (server) {
                const address = server.address();
                const host = address.address === "::" ? "localhost" : address.address;

                // by using a bound function, we can access options as `this`
                const protocol = this.https ? "https" : "http";
                console.log(`Server listening at ${protocol}://${host}:${address.port}/`);
            }
        })
    ]
};

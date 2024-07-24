import plugin_resolve from "@rollup/plugin-node-resolve";
import plugin_vue from "rollup-plugin-vue";
import plugin_babel from "@rollup/plugin-babel";
import plugin_scss from "rollup-plugin-scss";
import plugin_serve from "rollup-plugin-serve";

const PROJECT_BASE = process.env.npm_config_projectName ? "examples/" + process.env.npm_config_projectName : "static";

export default {
    input: "src/index.js",
    output: {
        name: "MiO-UI",
        format: "iife",
        file: PROJECT_BASE + "/dist/mio-ui.js",
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
        plugin_scss({
            fileName: "mio-ui.css"
        }),
        plugin_serve({
            contentBase: PROJECT_BASE,
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

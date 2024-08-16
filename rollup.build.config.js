import plugin_vue from "rollup-plugin-vue";
import plugin_resolve from "@rollup/plugin-node-resolve";
import plugin_commonjs from "@rollup/plugin-commonjs";
import plugin_babel from "@rollup/plugin-babel";
import plugin_scss from "rollup-plugin-scss";
import plugin_terser from "@rollup/plugin-terser";

const cfg = {
    input: "src/index.js",
    plugins: [
        plugin_resolve(),
        plugin_commonjs(),
        plugin_babel({
            babelHelpers: "bundled",
            exclude: "node_modules/**",
            presets: [
                "@babel/preset-env"
            ]
        }),
        plugin_scss({
            fileName: "mio-ui.css"
        }),
        plugin_terser()
    ],
    external: ["vue"]
}

export default [
    {
        input: cfg.input,
        output: {
            name: "MiOUI",
            format: "iife",
            file: 'build/mio-ui.js',
            extend: true,
            globals: {
                vue: "Vue"
            }
        },
        plugins: [
            plugin_vue(),
            ...cfg.plugins
        ],
        external: cfg.external
    },
    {
        input: cfg.input,
        output: {
            name: "MiOUI",
            format: 'umd',
            file: 'build/mio-ui.umd.js',
            sourcemap: true,
            globals: {
                vue: "Vue"
            }
        },
        plugins: [
            plugin_vue(),
            ...cfg.plugins
        ],
        external: cfg.external
    },
    {
        input: cfg.input,
        output: {
            format: 'esm',
            file: 'build/mio-ui.esm.js',
            sourcemap: true,
        },
        plugins: [
            plugin_vue(),
            ...cfg.plugins
        ],
        external: cfg.external
    },
    {
        input: cfg.input,
        output: {
            format: 'cjs',
            file: 'build/mio-ui.cjs.js',
            sourcemap: true,
        },
        plugins: [
            plugin_vue({
                template: {
                    optimizeSSR: true
                }
            }),
            ...cfg.plugins
        ],
        external: cfg.external
    }
]

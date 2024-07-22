import plugin_resolve from "@rollup/plugin-node-resolve";
import plugin_vue from "rollup-plugin-vue";
import plugin_babel from "@rollup/plugin-babel";
import plugin_scss from "rollup-plugin-scss";
import plugin_terser from "@rollup/plugin-terser";

const cfg = {
    input: "src/index.js",
    plugins: [
        plugin_resolve(),
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
    ]
}

export default [
    {
        input: cfg.input,
        output: {
            name: "MiO-UI",
            format: 'iife',
            file: 'build/mio-ui.js',
            extend: true
        },
        plugins: [
            ...cfg.plugins,
            plugin_vue()
        ]
    },
    {
        input: cfg.input,
        output: {
            format: 'esm',
            file: 'build/mio-ui.esm.js'
        },
        plugins: [
            ...cfg.plugins,
            plugin_vue()
        ]
    },
    {
        input: cfg.input,
        output: {
            format: 'cjs',
            file: 'build/mio-ui.ssr.js'
        },
        plugins: [
            ...cfg.plugins,
            plugin_vue({
                template: {
                    optimizeSSR: true
                }
            })
        ]
    }
]

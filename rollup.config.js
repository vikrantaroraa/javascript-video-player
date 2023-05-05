import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import postcss from "rollup-plugin-postcss";
import { babel } from "@rollup/plugin-babel";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

const rollupConfig = {
  input: "src/index.js",
  output: {
    file: "dist/bundle.js",
    format: "cjs",
  },
  plugins: [
    postcss({
      plugins: [],
      minimize: true,
    }),
    babel({
      babelHelpers: "bundled",
      exclude: "node_modules/**",
      presets: ["@babel/preset-react"],
    }),
    // node resolve will also work WITHOUT options object provided below. See what browser: true and
    // extensions: [array of extensions] in options object is used for
    nodeResolve({
      browser: true,
      extensions: [".jsx", ".js", ".json"],
    }),
    commonjs(),
    peerDepsExternal(),
    terser(),
  ],
};

export default rollupConfig;

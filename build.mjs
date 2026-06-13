import * as esbuild from "esbuild";

const watch = process.argv.includes("--watch");

/** @type {import('esbuild').BuildOptions} */
const options = {
  entryPoints: ["src/index.jsx"],
  bundle: true,
  minify: !watch,
  format: "iife",
  target: ["es2019"],
  outfile: "dist/faaaster-annotate.js",
  jsx: "automatic",
  jsxImportSource: "preact",
  loader: {
    ".css": "text",
    ".svg": "text",
  },
  define: {
    "process.env.NODE_ENV": watch ? '"development"' : '"production"',
  },
  logLevel: "info",
};

if (watch) {
  const ctx = await esbuild.context(options);
  await ctx.watch();
} else {
  await esbuild.build(options);
}

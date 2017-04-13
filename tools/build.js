'use strict';

const fs = require('fs');
const del = require('del');
const rollup = require('rollup');
const babel = require('rollup-plugin-babel');
const pkg = require('../package.json');

const postcss = require('rollup-plugin-postcss');
const simplevars = require('postcss-simple-vars');
const nested = require('postcss-nested');
const cssnext = require('postcss-cssnext');
const cssnano = require('cssnano');

let promise = Promise.resolve();

promise = promise.then(() => del(['dist/*']));

['es', 'cjs', 'umd'].forEach((format) => {
  promise = promise.then(() => rollup.rollup({
    entry: 'src/scripts/modules/Comparison.js',
    external: Object.keys(pkg.dependencies),
    plugins: [
      postcss({
        plugins: [
          simplevars(),
          nested(),
          cssnext({ warnForDuplicates: false, }),
          cssnano(),
        ],
        extensions: [ '.css' ],
      }),
      babel(Object.assign(pkg.babel, {
        babelrc: false,
        exclude: 'node_modules/**',
        runtimeHelpers: true,
        presets: ['es2015-rollup']
      })),
    ],
  }).then(bundle => bundle.write({
    dest: `dist/${format === 'cjs' ? 'index' : `index.${format}`}.js`,
    format,
    sourceMap: true,
    moduleName: format === 'umd' ? pkg.name : undefined,
  })));
});

promise = promise.then(() => {
  delete pkg.private;
  delete pkg.devDependencies;
  delete pkg.scripts;
  delete pkg.eslintConfig;
  delete pkg.babel;
  fs.writeFileSync('dist/package.json', JSON.stringify(pkg, null, '  '), 'utf-8');
  fs.writeFileSync('dist/LICENSE', fs.readFileSync('LICENSE', 'utf-8'), 'utf-8');
  fs.writeFileSync('dist/README.md', fs.readFileSync('README.md', 'utf-8'), 'utf-8');
});

promise.catch(err => console.error(err.stack));

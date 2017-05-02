import babel from 'rollup-plugin-babel';
import babelrc from 'babelrc-rollup';
const pkg = require('./package.json');

export default {
    entry: 'src/index.js',
    plugins: [
        babel(babelrc()),
    ],
    external: Object.keys(pkg.dependencies),
    targets: [
        {
            dest: pkg.main,
            format: 'umd',
            moduleName: 'boo-boo',
            sourceMap: true,
        },
    ],
};

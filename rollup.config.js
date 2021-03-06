process.env.NODE_ENV = 'development';

const babel = require('rollup-plugin-babel');
const pkg = require('./package.json');

export default {
    entry: './src/boo-boo.js',

    plugins: [babel()],

    targets: [
        {
            dest: pkg.main,
            format: 'cjs',
            sourceMap: true,
        },
        {
            dest: pkg.module,
            format: 'es',
            sourceMap: true,
        },
    ],
};

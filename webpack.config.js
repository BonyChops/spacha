const path = require('path');

const baseConfig = {
    mode: 'production',
    resolve: {
        extensions: ['.ts', '.js'],
    },
    module: {
        rules: [{ test: /\.ts$/, loader: 'ts-loader' }],
    },
};

const webConfig = {
    target: 'web',
    entry: './src/index.ts',
    output: {
        filename: 'spacha.js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'umd',
        globalObject: "typeof self !== 'undefined' ? self : this",
    },
};

const nodeConfig = {
    target: 'node',
    entry: './src/index.node.ts',
    output: {
        filename: 'spacha.node.js',
        libraryTarget: 'umd',
        globalObject: "typeof self !== 'undefined' ? self : this",
        path: path.resolve(__dirname, 'dist'),
    },
};

module.exports = [
    { ...baseConfig, ...webConfig },
    { ...baseConfig, ...nodeConfig },
];

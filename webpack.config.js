const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    target: "web",
    resolve: {
        extensions: [".ts", ".js"]
    },
    module: {
        rules: [
            {test: /\.ts$/, loader: 'ts-loader'},
        ]
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'window',
        globalObject: 'typeof self !== \'undefined\' ? self : this'
    }
};

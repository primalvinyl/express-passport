const path = require('path');

module.exports = {
    target: 'node',
    mode: 'production',
    entry: path.resolve(__dirname, 'src', 'server'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index.js',
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)?$/,
                exclude: /node_modules/,
                include: path.resolve(__dirname, 'src'),
                use: 'ts-loader',
            },
        ],
    },
    stats: {
        errorDetails: true,
    },
};

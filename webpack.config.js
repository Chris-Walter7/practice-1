const path = require('path');
module.exports = {
    entry: './practice1/travelShop/models/classes/services/modal/modalService.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundleNew.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
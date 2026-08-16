import path from 'node:path';
import { fileURLToPath } from 'node:url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
    entry: {
        app: './src/index.js',
    },    

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template.html',
        }),
        new MiniCssExtractPlugin()
    ],

    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean : true,
    },
};
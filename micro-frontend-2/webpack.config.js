const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const config = {
    // entry: './src/index.js',
    // // Where files should be sent once they are bundled
    // output: {
    //     filename: 'index.bundle.js',
    //     path: path.resolve(__dirname, 'dist')
    // },
    // webpack 5 comes with devServer which loads in development mode
    devServer: {
        port: 3002,
        watchContentBase: true
    },
    // Rules of how webpack will take our files, complie & bundle them for the browser
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            } 
        },{
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader']
        }]
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'microFrontEnd2',
            filename: 'remoteEntry.js',
            exposes: {
                './MicroFrontEnd2Index': './src/App',
            }
        }),
        new HtmlWebpackPlugin({template: './src/index.html'}),
        new MiniCssExtractPlugin()
    ]
}

module.exports = config;
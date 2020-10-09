const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /(\.css)$/,
                loaders: ['style-loader', 'css-loader']
            },
            { test: /\.json$/, use: { loader: 'json-loader' }, exclude: /node_modules/ },
            { test: /\.(jpe?g|png|gif|svg)$/i, use: { loader: "url-loader", options: { limit: 25000 } } },
            { test: /\.(eot|svg|ttf|woff|woff2)(\?.*$|$)/, use: { loader: "url-loader", options: { limit: 25000 } } },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            }
        ]
    },
    entry: path.join(__dirname, './src/index.js'),
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    devServer: {
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: "./index.html"
        })
    ]
};
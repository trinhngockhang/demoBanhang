const webpack = require("webpack");
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");

const config = {
    entry: ['babel-polyfill', './app/index.js'],
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
    },
    watch: true,
    resolve: {
        modules: ['app', 'node_modules'],
        extensions: [
            '.js',
            '.jsx',
            '.react.js',
            '.css',
        ],
    },
    module: {
        rules: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000'
            },
            // {
            //     test: /\.css$/,
            //     use: ExtractTextPlugin.extract({
            //         fallback: 'style-loader',
            //         use: [
            //             { loader: 'css-loader', options: { importLoaders: 1, minimize: true } },
            //             'postcss-loader'
            //         ]
            //     })
            // }
            {
                test: /\.css$/,
                use: [
                  'style-loader',
                  { loader: 'css-loader', options: { importLoaders: 1 } },
                  'postcss-loader'
                ]
<<<<<<< HEAD
            }
=======
              }
>>>>>>> 264c0e2cc3283d41d647e496d020647a0a4f1dc2
        ]
    },
    plugins: [
        // new ExtractTextPlugin({
        //     filename: '[name].css',
        //     allChunks: true
        // }),
        new webpack.DefinePlugin({ // <-- key to reducing React's size
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        }),
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false,
        //         screw_ie8: true,
        //         conditionals: true,
        //         unused: true,
        //         comparisons: true,
        //         sequences: true,
        //         dead_code: true,
        //         evaluate: true,
        //         if_return: true,
        //         join_vars: true
        //     },
        //     output: {
        //         comments: false
        //     }
        // }),
        // new CompressionPlugin({
        //     asset: "[path].gz[query]",
        //     algorithm: "gzip",
        //     test: /\.js$|\.css$|\.html$/,
        //     threshold: 10240,
        //     minRatio: 0
        // }),
<<<<<<< HEAD
=======
        // new HtmlWebpackPlugin({
        //     template: 'views/home.ejs',
        //     inject: false,
        //     filename: 'home.ejs',
        //     minify: {
        //         removeComments: true,
        //         collapseWhitespace: true,
        //         removeRedundantAttributes: true,
        //         useShortDoctype: true,
        //         removeEmptyAttributes: true,
        //         removeStyleLinkTypeAttributes: true,
        //         keepClosingSlash: true,
        //         minifyJS: true,
        //         minifyCSS: true,
        //         minifyURLs: true,
        //         }
        // })
>>>>>>> 264c0e2cc3283d41d647e496d020647a0a4f1dc2
    ]
}

module.exports = config;
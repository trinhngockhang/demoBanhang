// var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var webpack = require("webpack");
const CompressionPlugin = require("compression-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = require('./paths');
const path = require('path');

module.exports = {
    entry: ['babel-polyfill','./app/index.js'],
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].bundle.js',
        chunkFilename: '[name].chunk.js',
    },
    plugins: [
       
        new webpack.DefinePlugin({
            'process.env': {
              'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress: false
        }),
        new CompressionPlugin({
            asset: "[path].gz[query]",
            algorithm: "gzip",
            test: /\.js$|\.css$|\.html$/,
            threshold: 10240,
            minRatio: 0
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            // minChunks: (module) => /node_modules/.test(module.context)
            
            minChunks(module, count) {
                var context = module.context;
                return context && context.indexOf('node_modules') >= 0;
            },
        }),       
         
        new webpack.optimize.CommonsChunkPlugin({
            name: 'react',  
            minChunks(module, count) {
                var context = module.context;
                return context && context.indexOf('node_modules\/react') >= 0;
            },
        }),

        new HtmlWebpackPlugin({
            inject: true,
            template: paths.appHtml,
            minify: {
              removeComments: true,
              collapseWhitespace: true,
              removeRedundantAttributes: true,
              useShortDoctype: true,
              removeEmptyAttributes: true,
              removeStyleLinkTypeAttributes: true,
              keepClosingSlash: true,
              minifyJS: true,
              minifyCSS: true,
              minifyURLs: true,
            }
        })   
    ],
    module: {
        loaders: [
            {
                test: /\.(jpg|png)$/,
                loader: 'url?limit=25000',
                
            }        
        ],
        rules: [  
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },    
            {
            // Preprocess our own .css files
            // This is the place to add your own loaders (e.g. sass/less etc.)
            // for a list of loaders, see https://webpack.js.org/loaders/#styling
            test: /\.css$/,
            exclude: /node_modules/,
            use: ['style-loader', 'css-loader'],
            },
            {
            // Preprocess 3rd party .css files located in node_modules
            test: /\.css$/,
            include: /node_modules/,
            use: ['style-loader', 'css-loader'],
            },
            {
            test: /\.(eot|svg|otf|ttf|woff|woff2)$/,
            use: 'file-loader',
            },
        ],
    },
    resolve: {
        modules: ['app', 'node_modules'],
        extensions: [
          '.js',
          '.jsx',
          '.react.js',
          '.css',
        ],
        mainFields: [
          'browser',
          'jsnext:main',
          'main',
        ],
    }
}

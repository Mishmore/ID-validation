let path = require('path');
let webpack = require('webpack');
// let transform = require("transform-loader");

module.exports = {
    target: 'web',
    devtool: '#inline-source-map', // cheap-module-source-map
    cache: true,
    entry: {
        userValidation: './js/app.js'
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '',
        filename: '[name].bundle.js',
        chunkFilename: '[name].js'
    },
    // resolve: {
    //     // extensions: ['', '.js'],
    //     alias: {
    //         webworkify: 'webworkify-webpack',
    //         'mapbox-gl': path.resolve('./node_modules/mapbox-gl/dist/mapbox-gl.js')
    //     }
    // },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react', 'stage-0'],
                        plugins: ['transform-runtime']
                    }
                }],
                exclude: [
                    /node_modules/,
                    path.resolve(__dirname, 'js/dist')
                ],
                include: [
                    path.resolve(__dirname, 'js')
                ]
            },
            {
                test: /\.(css|pcss)$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader?sourceMap&modules&camelCase&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            // `jwt-simple` uses crypto-browserify that requires
            // .json files to be part of the build
            {
                test: /\.json$/,
                use: 'json-loader',
                include: /node_modules/
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg|gif)$/,
                use: 'url-loader?limit=100000'
            },
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'node_modules/webworkify/index.js'),
                loader: 'worker'
            },
            {
                test: /mapbox-gl.+\.js$/,
                loader: 'transform-loader/cacheable?brfs'
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
                sourceMap: true,
                compress: {
                    warnings: false,
                    comparisons: false,  // don't optimize comparisons
                },
            }
        )
    ]
};

let path = require('path')
let webpack = require('webpack')
let HTMLPlugin = require('html-webpack-plugin')
let ExtractText = require('extract-text-webpack-plugin')

let isDev = process.env.NODE_ENV === 'development' 

let config = {
    target: 'web',
    mode: process.env.NODE_ENV,
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        filename: 'bundle.[hash:8].js',
        path: path.join(__dirname, 'dist')
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.jsx$/,
                use: 'babel-loader'
            },
            {
                test: /\.(jpg|png|jpeg|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024
                        }
                    }
                ]
            }
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_DEV: isDev ? '"development"' : '"production"'
            }
        }),
        new HTMLPlugin()
    ],

    
}

if(isDev) {
    config.devtool = '#cheap-module-eval-source-map'

    config.module.rules.push( {
        test: /\.css$/,
        use: [
            'style-loader',
            'css-loader',
            'postcss-loader',
            'sass-loader'
        ]
    })

    config.devServer = {
        port: 8000,
        host: '0.0.0.0',
        overlay: {
            errors: true
        },
        hot: true
    }

    config.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    )
} else {
    config.entry = {
        app: path.join(__dirname, 'src/index.js'),
        vendor: ['vue']
    }

    config.output.filename = '[name].[chunkhash:8].js'

    config.module.rules.push({
        test: /\.css$/,
        use: ExtractText.extract({
            fallback: 'style-loader',
            use: [
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
        })
    })

    config.plugins.push(
        new ExtractText('style.[contenthash:8].css'),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'vendor'
        // }),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'runtime'
        // })
    )
}

module.exports = config

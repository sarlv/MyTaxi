module.exports = {
    devtool: 'eval-source-map',

    entry: __dirname + '/src/index.js',

    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.json/,
                loader: 'json'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2017', 'react']
                }
            },
            {
              test: /\.css$/,
              loader: 'style-loader!css-loader'
            },
            {
                test: /\.scss$/,
                exclude: /(node_modules|bower_components)/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true
                    }
                }, {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true
                    }
                }]
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000'
            }
        ]
    },

    devServer: {
        contentBase: './public',
        port: 3000,
        historyApiFallback: true,
        inline: true,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        },
    }
}

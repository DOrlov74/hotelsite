const path=require('path');
const HtmlWebpackPlugin=require('Html-webpack-plugin');
const TerserPlugin=require('terser-webpack-plugin');
const MiniCssExtractPlugin=require('mini-css-extract-plugin');
const {CleanWebpackPlugin}=require('clean-webpack-plugin');

module.exports={
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
        //publicPath: 'dist/'
    },
    mode: 'none',
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()]
    },
    module: {
        rules: [
            {
                test: /\.(woff2?|ttf)$/,
                use: ['file-loader']
            },
            {
                test: /\.(png|jpg|svg)$/,
                use: ['file-loader']
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist/'),
        index: 'index.html',
        port: 9000
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'styles.css'
        }),
        new CleanWebpackPlugin(),
    ]
}
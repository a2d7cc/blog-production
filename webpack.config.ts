import webpack from "webpack";
import path from "path";
import HtmlWebpackPlugin from 'html-webpack-plugin'

const config: webpack.Configuration = {
  mode: 'development',
  entry: './src/index.ts',
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
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[contenthash].bundle.js',
    clean: true
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    })
  ],
};

export default config;
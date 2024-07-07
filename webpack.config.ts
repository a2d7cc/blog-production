import webpack from "webpack";
import path from "path";
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { BuildEnv, BuildPaths } from "./config/build/types/config";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";





module.exports = (env: BuildEnv) => {
  const port = env.port || 3000;
  const mode = env.mode || 'development';
  const isDev = mode === 'development';

  const paths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    build: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html")
  }

  const config: webpack.Configuration = buildWebpackConfig({
    port,
    mode,
    isDev,
    paths
  })

  return config;
}



/* const config: webpack.Configuration = {
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

export default config; */
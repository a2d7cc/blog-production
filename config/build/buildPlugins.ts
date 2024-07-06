import HtmlWebpackPlugin from "html-webpack-plugin";
import { BuildPaths } from "./types/config";
import webpack from "webpack";

export const buildPlugins = (paths: BuildPaths) => {
    const htmlWebpackPlugin = new HtmlWebpackPlugin({
        template: paths.html
      });

    const progressPlugin = new webpack.ProgressPlugin();
    return [
        htmlWebpackPlugin,
        progressPlugin
    ];
}
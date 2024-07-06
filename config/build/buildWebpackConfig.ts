import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { BuildEnv, BuildOptions } from "./types/config";

export const buildWebpackConfig = (options: BuildOptions) => {
    const { paths, port, mode, isDev } = options;

    return {
        mode,
        entry: paths.entry,
        output: {
            path: paths.build,
            filename: '[name].[contenthash].bundle.js',
            clean: true
        },
        plugins: buildPlugins(paths),
        resolve: buildResolvers(),
        module: {
            rules: buildLoaders()
        }
    }
}
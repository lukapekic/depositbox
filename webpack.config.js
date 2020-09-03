const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const nodeSass = require('node-sass');

const webpackConfiguration = (env) => {
  const enviroment = env.NODE_ENV;
  const isProduction = enviroment === 'production';

  const plugins = [
    new HtmlPlugin({ template: './public/index.html' }),
  ];

  if (isProduction) {
    plugins.push(new CleanWebpackPlugin());
  }

  return {
    mode: enviroment,
    entry: {
      main: './src/index.js',
    },
    output: {
      filename: '[name].[contenthash].js',
      path: path.resolve(__dirname, 'build'),
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
        {
          test: /\.(png|jpg|gif)$/,
          loader: 'file-loader',
          options: {
            outputPath: 'assets',
          },
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            'style-loader',
            'css-loader',
            {
              loader: 'sass-loader',
              options: {
                implementation: nodeSass,
              },
            },
          ],
        },
      ],
    },

    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'initial',
            enforce: true,
          },
        },
      },
    },

    devServer: {
      port: 3000,
      compress: true,
      stats: 'minimal',
      historyApiFallback: true,
    },

    devtool: isProduction ? 'none' : 'inline-source-map',
    plugins,
  };
};

module.exports = webpackConfiguration;

var webpack = require('webpack'),
    path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ngTools = require('@ngtools/webpack');

function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [ __dirname ].concat(args));
}

const useAOT = !!(process.env.AOT && JSON.parse(process.env.AOT));

console.log("Building AOT:  ", useAOT);
console.log("\n");

module.exports = {

    target: 'web',

    resolve: {
      extensions: ['.ts', '.js'],
      modules: [
        root('node_modules'),
        root('src/client')
      ]
    },

    entry: ['./src/client/main.ts'],

    output: {
      path: root('dist'),
      filename: '[name].bundle.js',
      sourceMapFilename: '[name].bundle.map',
      chunkFilename: '[id].chunk.js'
    },

    devServer: {
      historyApiFallback: true
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: [root('node_modules]')],
          enforce: 'pre',
          use: 'source-map-loader'
        },

        {
          test: /\.ts$/,
          use: '@ngtools/webpack'
        },

        {
          test: /\.html$/,
          use: 'raw-loader',
          exclude: [root('src/client/index.html')]
        },

        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
      ]
    },

    plugins: [

      new ngTools.AotPlugin({
        tsConfigPath: root('src/client/tsconfig.json'),
        mainPath: root('src', 'client', 'main.ts'),
        skipCodeGeneration: !useAOT
      }),

      new HtmlWebpackPlugin({
        template: './src/client/index.html',
        filename: './index.html'
      })
    ]
};

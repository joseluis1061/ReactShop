const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//const DotenvWebpackPlugin = require('dotenv-webpack');
module.exports = {
  //Punto de entrada
  mode:'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
      '@containers': path.resolve(__dirname, 'src/containers/'),
      '@styles': path.resolve(__dirname, 'src/styles/'),
      '@icons': path.resolve(__dirname, 'src/assets/icons/'),
      '@logos': path.resolve(__dirname, 'src/assets/logos/')
    }
  },

  //Modulos que definen las reglas de optimización mediante loaders
  module: {
    rules: [
      //Optimización de JavaScript
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      //Optimización de Html
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      //Optimización CSS
      {
        test: /\.(css|scss)$/,
        use: [
          // {
          //   loader: MiniCssExtractPlugin.loader,
          // },
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      //Image
      {
        test: /\.(png|svg|jpg|jpeg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/img/[hash][ext][query]',
        },
      }
    ],
  },

  //Plugins para indicar las salidas
  plugins: [
    //Html
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),

    //Css
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),

    //Variables de entorno
    //new DotenvWebpackPlugin(),
  ],
  //Servidor de salida de la App
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    devMiddleware: {
      index: 'index.html',
    },
    historyApiFallback: true,
    compress: true,
    port: 3000,
  },
};
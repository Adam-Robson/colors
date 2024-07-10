import { fileURLToPath } from 'url';
import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ESLintPlugin from 'eslint-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const config = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',

  entry: [
    './src/index.jsx',
  ],

  output: {
    publicPath: '/',
    clean: true,
    filename: 'app.bundle.js',
    path: path.join(__dirname, '/dist')
  },

  devServer: {
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
            ],
          },
        },
      },

      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
          },
        ],
      },

      {
        test: /\.(svg|png)$/,
        use: 'url-loader',
      },
    ],
  },

  plugins: [
    new ESLintPlugin({
      files: [
        './**/*.{js,jsx}'
      ]
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '/src/index.html'),
    }),
    new webpack.ProvidePlugin({
      React: 'react',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  }
};

export default config;

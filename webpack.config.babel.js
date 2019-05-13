import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default webpackEnv => {
  const isProduction = webpackEnv === 'production';

  return {
    entry: {
      app: ['./src/index.js'],
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].bundle.js',
    },
    mode: isProduction ? 'production' : 'development',
    devServer: {
      contentBase: './public',
      port: 3000,
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    plugins: [new HtmlWebpackPlugin({ template: 'public/index.html' })],
  };
};

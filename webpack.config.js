const path = require('path');

module.exports = {
  target: ['web', 'es5'],
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist/assets'),
    filename: 'bundle.js'
  },
  // Webpack Dev Server
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    devMiddleware: {
      publicPath: '/assets/'
    }
  },
  module: {
    rules: [
      // Babel.
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      // CSS.
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}
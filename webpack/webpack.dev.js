const webpack = require('webpack')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    hot: true,
    open: true,
    port: 3001,
    historyApiFallback: true,
    proxy: {
      '/api/v1': 'http://localhost:3000',
      '/api/schema': 'http://10.4.40.254:8081',
      '/api/constructor': 'http://10.4.40.254:8081',
      '/api/task': 'http://10.4.40.254:8005',
      '/api/processes': 'http://10.4.40.254:8005',
      '/api/auth': 'http://10.4.40.254:8088',
      '/api/user': 'http://10.4.40.254:8088',
      '/api/object': 'http://10.4.40.254:8080',
    },
  },
  plugins: [
    new ReactRefreshWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('Vishwas'),
    }),
  ],
}

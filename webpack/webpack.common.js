const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const resolveTsconfigPathsToAlias = require('./resolveTsconfigPathsToWebpackAlias.js')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

const tsconfigPathAliases = resolveTsconfigPathsToAlias({
  tsconfigPath: '../tsconfig.json', // Using custom path
  projectRoot: path.join(__dirname, '../'), // Using custom path
})

module.exports = {
  entry: path.resolve(__dirname, '..', './src/app/index.tsx'),
  resolve: {
    alias: {
      ...tsconfigPathAliases,
    },
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/i,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'esbuild-loader',
            options: {
              loader: 'jsx',
              target: 'es2015',
              sourcemap: true,
            },
          },
          {
            loader: 'esbuild-typescript-loader',
            options: {
              loader: 'ts',
              sourcemap: true,
            },
          },
        ],
      },
      {
        test: /\.tsx$/i,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'esbuild-loader',
            options: {
              loader: 'jsx',
              target: 'es2015',
              sourcemap: true,
            },
          },
          {
            loader: 'esbuild-typescript-loader',
            options: {
              loader: 'tsx',
              sourcemap: true,
            },
          },
        ],
      },

      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$/,
        type: 'asset/resource',
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              prettier: false,
              svgo: false,
              svgoConfig: {
                plugins: [{ removeViewBox: false }],
              },
              titleProp: true,
              ref: true,
            },
          },
          {
            loader: 'file-loader',
            options: {
              name: 'static/media/[name].[hash].[ext]',
            },
          },
        ],
        issuer: {
          and: [/\.(ts|tsx|js|jsx|md|mdx)$/],
        },
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, '..', './build'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './src/app/index.html'),
    }),
    new CopyPlugin({
      patterns: [
        { from: './locales', to: 'locales' },
        { from: './favicon.ico', to: './favicon.ico' },
      ],
    }),
    new ForkTsCheckerWebpackPlugin(),
  ],
  stats: 'errors-only',
}

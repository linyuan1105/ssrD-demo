const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const base = require('./webpack.base.config')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')

const config = merge(base, {
  devtool: 'source-map',
  entry: {
    app: './src/entry-client.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  plugins: [
    // extract webpack runtime & manifest to avoid vendor chunk hash changing
    // on every build.
    new VueSSRClientPlugin()
  ]
})

module.exports = config

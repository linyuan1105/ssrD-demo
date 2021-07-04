const path = require('path')
const merge = require('webpack-merge')
const base = require('./webpack.base.config')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')

const config = merge(base, {
  target:'node',
  devtool: 'source-map',
  entry: {
    app: './src/entry-server.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server-bundle.js',
    libraryTarget: 'commonjs2'
  },
  plugins: [
    new VueSSRServerPlugin()
  ]
})
module.exports = config

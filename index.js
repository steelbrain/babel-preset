'use strict'

var plugins = require('babel-preset-es2015').plugins
// Remove transform-regenerator
plugins.pop()
// Add our tates above that
plugins.push(
  require("babel-plugin-syntax-async-functions"),
  require("babel-plugin-syntax-async-generators"),
  require("babel-plugin-transform-async-to-generator")
)
plugins = plugins.concat(require('babel-preset-react').plugins)

module.exports = {
  plugins: plugins
}

'use strict'

var plugins = require('babel-preset-es2015').plugins
// Remove transform-regenerator
plugins.pop()
// Add our tates above that
plugins.push(
  require("babel-plugin-syntax-async-functions"),
  require("babel-plugin-syntax-async-generators"),
  require("babel-plugin-transform-async-to-generator"),
  require("babel-plugin-transform-flow-strip-types")
)

module.exports = {
  plugins: plugins
}

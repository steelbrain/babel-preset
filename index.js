module.exports = {
  plugins: [
    require("babel-plugin-transform-es2015-literals"),
    require("babel-plugin-transform-es2015-block-scoped-functions"),
    require("babel-plugin-transform-es2015-shorthand-properties"),
    require("babel-plugin-transform-es2015-computed-properties"),
    require("babel-plugin-transform-es2015-parameters"),
    require("babel-plugin-transform-es2015-destructuring"),
    require("babel-plugin-transform-es2015-modules-commonjs"),
    require("babel-plugin-transform-es2015-for-of"),
    require("babel-plugin-transform-es2015-arrow-functions"),
    require("babel-plugin-transform-es2015-spread"),
    require("babel-plugin-syntax-async-functions"),
    require("babel-plugin-syntax-async-generators"),
    require("babel-plugin-transform-async-to-generator")
  ]
}

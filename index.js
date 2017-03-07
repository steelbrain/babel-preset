module.exports = function(context, givenOpts) {
  var opts = Object.assign({
    exclude: [],
    targets: {
      node: 0,
    },
  }, givenOpts)
  opts.exclude.push('transform-regenerator')

  return {
    presets: [
      [require.resolve('babel-preset-env'), opts], require.resolve('babel-preset-stage-0'), require.resolve('babel-preset-react')
    ],
    plugins: [
      require.resolve('babel-plugin-transform-decorators-legacy')
    ]
  }
}

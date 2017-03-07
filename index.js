module.exports = function(context, opts) {
  var exclude = ['transform-regenerator']
  if (Array.isArray(opts.exclude)) {
    exclude = exclude.concat(opts.exclude)
  }

  return {
    presets: [
      [require.resolve('babel-preset-env'), {
        exclude,
        targets: {
          node: 0,
        },
      }], require.resolve('babel-preset-stage-0'), require.resolve('babel-preset-react')
    ],
    plugins: [
      require.resolve('babel-plugin-transform-decorators-legacy')
    ]
  }
}

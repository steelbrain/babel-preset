Babel-Preset
============

This is my babel preset that aims at the latest ES features (stage-0) while having React and decorator support as well.
By default this preset blacklists only one transpiler, and that is the `regenerator` one, It does so that you don't have to include regenerator runtime
in your frontend of node applications because Node has had generator support for quite some time.

## Installation

```
npm install --save babel-preset-steelbrain
```

## Usage

In your `.eslintrc`
```
{
  "presets": ["steelbrain"]
}
```
or in CLI
```
babel --presets steelbrain
# For example:
# babel --presets steelbrain src --out-dir lib
```

## Configuration

You can blacklist or configure this preset similar to how you control behavior or [`babel-preset-env`](https://github.com/babel/babel-preset-env#options).
For example:

Blacklisting the var/const transform
```
{
  "presets": [
    ["steelbrain", {
      "exclude": ["transform-es2015-block-scoping"]
    }]
  ]
}
```

Blacklisting ES Modules transpilation

```
{
  "presets": [
    ["steelbrain", {
      "modules": false
    }]
  ]
}
```

## LICENSE
This module is licensed under the terms of MIT License, check the LICENSE file for more info.

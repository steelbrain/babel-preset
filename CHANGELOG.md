## 5.0.2

- Allow overriding exclusion of regenerator transform through configuration

## 5.0.1

- Allow specifying excludes from preset configuration

## 5.0.0

- Move away from `babel-preset-es2015-sane` towards `babel-preset-env`, having same output except that it's maintained officially and points to latest version deps

## 4.0.2

- Remove the flow pragma to remove an unnecessary flow warnings

## 4.0.1

- Use `babel-preset-es2015-sane` instead of `babel-preset-es2015` to remove dependency on regenerator runtime

## 4.0.0

- Add support for decorators
- Depend on presets directly and include fix for `Missing class properties transform`

## 3.0.0

- Skipped because of a deployment error

## 2.0.1

- Depend on all the transforms directly, It fixes the conflict between flow and `class` transform that was triggering an error `Missing class properties transform.`

## 2.0.0

- Merge `steelbrain-flow` and `steelbrain-async` preset in
- Extend `ES2015` and drop `transform-regenerator` from it
- Extend `react`

## Pre 2.0.0

- A babel preset that transforms a few ES2015 features

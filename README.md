# SymbolFunction

[![npm version](https://badge.fury.io/js/symbol-function.svg)](https://badge.fury.io/js/symbol-function)
[![Build Status](https://travis-ci.org/kamataryo/symbol-function.svg?branch=master)](https://travis-ci.org/kamataryo/symbol-function)

SymbolFunction can be used as a function and bracket suffix.

## install

```shell
$ yarn add @kamataryo/symbol-function
# or
$ npm insall @kamataryo/symbol-function
```

## usage

```javascript
// it works as a Function'
const func = new SymbolFunction(() => 'xyz')
func() // 'xyz'
})

// it can be used as bracket suffix
const func1 = new SymbolFunction(() => {})
const func2 = new SymbolFunction(() => {})
const obj = {}
obj[func1] = 123
obj[func2] = 234

obj[func1] // 123
obj[func2] // 234
```

const test = require('ava')
const SymbolFunction = require('./')

test('it works as a Function', t => {
  const func = new SymbolFunction(() => 'xyz')
  t.is(func(), 'xyz')
})

test('The constructor raise an argument error', t => {
  t.throws(() => new SymbolFunction('abc'))
})

test('toString() is overrode', t =>
  t.is(typeof new SymbolFunction(() => 'hello').toString(), 'symbol'))

test('toString() returns same object', t => {
  const func = new SymbolFunction(() => 'hello')
  t.is(func.toString(), func.toString())
})

test('The argued function is cloned', t => {
  const func = () => {}
  t.not(new SymbolFunction(func), func)
})

test('it can be used as bracket suffix', t => {
  const func1 = new SymbolFunction(() => {})
  const func2 = new SymbolFunction(() => {})
  const obj = {}
  obj[func1] = 123
  obj[func2] = 234
  t.is(obj[func1], 123)
  t.is(obj[func2], 234)
})

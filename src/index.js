module.exports = class SymbolFunction {
  constructor(func) {
    if (typeof func === 'function') {
      this._func = (...arg) => func(...arg)
      this._symbol = Symbol(this._func.name || 'symbol function')
      this._func.toString = () => this._symbol
      return this._func
    } else {
      throw new TypeError(`Invalid arguments type ${typeof func}`)
    }
  }
}

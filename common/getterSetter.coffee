getterSetter = (obj) ->
  getter: (propName, getterFunction) ->
    Object.defineProperty obj.prototype, propName,
      get: getterFunction
      configurable: true
      enumerable: true
  setter: (propName, setterFunction) ->
    Object.defineProperty obj.prototype, propName,
      set: setterFunction
      configurable: true
      enumerable: true

export default getterSetter

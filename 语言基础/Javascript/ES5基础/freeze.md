只能冻结子层属性和方法,孙层元素不受影响
如果要冻结整个对象,就需要逐个遍历,逐个冻结了(使用递归)
``` js
// To do so, we use this function.
function deepFreeze(obj) {

  // Retrieve the property names defined on obj
  var propNames = Object.getOwnPropertyNames(obj)

  // Freeze properties before freezing self
  propNames.forEach(function(name) {
    var prop = obj[name]

    // Freeze prop if it is an object
    if (typeof prop == 'object' && prop !== null)
      deepFreeze(prop)
  })

  // Freeze self (no-op if already frozen)
  return Object.freeze(obj)
}

obj2 = {
  internal: {}
}

deepFreeze(obj2)
obj2.internal.a = 'anotherValue'
obj2.internal.a // undefined
```
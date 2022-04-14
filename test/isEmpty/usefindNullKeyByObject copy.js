
function is(value) {
  return Object.prototype.toString.call(value).match(/\[object (.*?)\]/)[1].toLowerCase();
}
const dataType = (value) => {
  return Object.prototype.toString.call(value).replace('[object ', '').replace(']', '') + '';
}
const useEmptyObject = (obj) => {
  if (dataType(obj) === 'Object') {
    let flag = !(Object.getOwnPropertyNames(obj).length > 0 || Object.getOwnPropertySymbols(obj).length > 0)
    let names = [...Object.getOwnPropertyNames(obj), ...Object.getOwnPropertySymbols(obj)]
    return {
      flag,
      names,
      len: names.length
    }
  } else {
    return { flag: true, names: [], len: 0 }
  }
}
const usefindNullValueByObject = function (value, ...ignore) {
  let flag = true;
  let whereKey = {};
  if (is(value) === 'object') {
    for (let key in value) {
      if (is(value[key]) === 'object' && !useEmptyObject(value[key]).flag) {
        return usefindNullValueByObject(value[key])
      } else {
        if (ignore.includes(key)) continue
        if (useEmptyObject(value[key]).flag) {
          flag = false;
          whereKey[key] = true;
        } else if (value[key] !== '0' && !value[key]) {
          flag = false;
          whereKey[key] = true;
        }
      }
    }
  }

  return {
    flag,
    whereKey
  };
};

console.log(usefindNullValueByObject({ name: '', age: '' }, 'age')); // false { name: true }
console.log(usefindNullValueByObject({ name: '', age: '' })); // false { name: true, age: true }
console.log(usefindNullValueByObject({ name: '', age: '11' })); // false { name: true }
console.log(usefindNullValueByObject({ name: '11', age: '11' })); // true { }
console.log(usefindNullValueByObject({ name: '11', age: '11' }, 'age', 'name')); // true { }
console.log(usefindNullValueByObject({ name: '11', age: '11' }, 'age')); // true { }
console.log(usefindNullValueByObject({ name: '11', age: '', a: {} }, 'age')); // false { a: true }
console.log(usefindNullValueByObject({ name: '11', age: '', a: {} })); // false { a: true,age: true }
console.log(usefindNullValueByObject({ name: '11', age: '', a: {} }, 'a')); // false { age: true }
console.log(usefindNullValueByObject({ name: '11', age: '', a: {} }, 'a', 'age')); // true { age: true }
console.log(usefindNullValueByObject({ name: '11', age: '', a: {}, b: null }, 'a', 'age')); // { flag: false, whereKey: { b: true } }
console.log(usefindNullValueByObject({ name: '11', age: '', a: {} }, 'a', 'age')); // { flag: false, whereKey: { b: true } }
console.log(usefindNullValueByObject({ name: '11', age: '', a: {}, b: undefined, c: null }, 'age')); // { flag: false, whereKey: { b: true } }
console.log(usefindNullValueByObject({
  name: '11', age: '', a: {
    d: {
      aaaa: {}
    }
  }, b: undefined, c: null
}));

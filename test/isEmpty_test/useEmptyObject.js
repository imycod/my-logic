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

const obj = {
  name: 'aaa',
  b: '',
  c: null,
  d: {}
}
let a = Symbol("a");
obj[a] = 'aaaa'

console.log(useEmptyObject(obj));
const obj1 = {
}
console.log(useEmptyObject(obj1));
const obj2 = null
console.log(useEmptyObject(obj2));
console.log(useEmptyObject(undefined));
let name = 'a'
console.log(useEmptyObject(name));

console.log(useEmptyObject({}));



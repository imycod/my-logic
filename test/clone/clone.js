const dataType = (value) => {
  return Object.prototype.toString.call(value).replace('[object ', '').replace(']', '') + '';
}
function clone(value) {
  if (value === null) return null;
  if (typeof value !== 'object') return value;
  if (dataType(value) !== 'Object') return value
  let newValue = new value.constructor();
  for (const key in value) {
    if (value.hasOwnProperty(key)) {
      newValue[key] = clone(value[key]);
    }
  }
  return newValue;
}

const data = {
  name: 'wxs',
  age: '',
  a: {
    b: {
      c: {
        age: 0,
        d: {
          name: '1111'
        }
      }
    }
  }
}

const newData = clone(data)
newData.name = 'wxs2'
newData.a.b.c.d.name = 2222

console.log("data", data);
console.log("newData", newData);

console.log(data.a.b.c.d.name); 
console.log(newData.a.b.c.d.name); 

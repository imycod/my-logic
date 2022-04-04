
import { is } from "./type"

function clone(value) {
  if (value === null) return null;
  if (typeof value !== 'object') return value;
  if (is(value) !== 'object') return value
  let newValue = new value.constructor();
  for (const key in value) {
    if (value.hasOwnProperty(key)) {
      newValue[key] = clone(value[key]);
    }
  }
  return newValue;
}


export {
  clone,
}

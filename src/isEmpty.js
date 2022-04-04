import { is, dataType } from "./type";
/**
 * 对象key值为空
 * @param {*} params { name:''  }
 * @param  {...any} ignore 
 * @returns 
 */
const usefindNullValueByObject = function (value, ...ignore) {
  let flag = true;
  let whereKey = {};
  if (is(value) !== 'object') return
  if (is(value) === 'object') handleObject()
  function handleObject() {
    for (let key in value) {
      if (is(key) === 'object' && !useEmptyObject(value[key]).flag) {
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

/**
 * 表单对象是否全为空校验,层级1
 * 前置条件:传进来必须是对象且必须展平
 * @param {*} obj 
 */
const useStrictValidateFrom = (obj, ...ignore) => {
  let flag = true;
  let whereKey = {};
  for (let key in obj) {
    if (ignore.includes(key)) continue
    if (obj[key] !== '0' && !obj[key]) {
      flag = false;
      whereKey[key] = true;
    }
  }
  return {
    flag,
    whereKey
  };
}

const useValidateFrom = (obj) => {
  let flag = false;
  for (let key in obj) {
    if (obj[key]) {
      flag = true;
      break
    }
  }
  return flag
}

/**
 * 判断是否是空对象
 * @param {*} obj {  } | { name:'' }
 * @returns {true,[],0}  | {false,[name],1}
 */
const useEmptyObject = (obj) => {
  if (dataType(obj) === 'Object') {
    /**
     * vue项目中使用Object.getOwnPropertyNames(obj).forEach()遍历对象，对象中多出一个属性{__ob__: Observer}
     * https://blog.csdn.net/weixin_44138767/article/details/107207145 
     * Object.keys instead of Object.getOwnPropertyNames 
     */
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

export {
  usefindNullValueByObject,
  useEmptyObject
}

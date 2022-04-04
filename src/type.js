function is(value) {
  return Object.prototype.toString.call(value).match(/\[object (.*?)\]/)[1].toLowerCase();
}
/**
 * 获取数据类型
 */
const dataType = (value) => {
  return Object.prototype.toString.call(value).replace('[object ', '').replace(']', '') + '';
}
export { is, dataType }

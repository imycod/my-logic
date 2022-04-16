
// 找到数组任意两数相加等于某个值
export function twoSumIndex(nums, target) {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]
    if (map.has(complement)) {
      return [map.get(complement), i]
    }
    map.set(nums[i], i)
  }
  return map
}


export function twoSumValue(nums, target) {
  const wanted = {}
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    const value = target - num
    if (wanted[num])
      return [num, value]
    wanted[value] = true
  }
  return wanted
}

import { binarySearchShadow } from './arithmetic';

export function threeSum(arr) {
  arr.sort((a, b) => a - b)
  let n = arr.length - 1
  let result = []
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const complement = -arr[i] - arr[j]
      const index = binarySearchShadow(arr, complement)
      if (index > -1) {
        result.push([index, i, j])
        n -= 1
      }
    }
  }
  return result
}

export function threeSum2(arr) {
  arr.sort((a, b) => a - b)
  let i = 0;
  let n = arr.length - 1;
  let result = []
  while (i < n) {
    for (let j = i + 1; j < n; j++) {
      const complement = -arr[i] - arr[j]
      const index = binarySearch(arr, complement)
      if (index > -1) {
        result.push([arr[index], arr[i], arr[j]])
        n -= 1
        // break
      }
    }
    i += 1
  }
  return result
}

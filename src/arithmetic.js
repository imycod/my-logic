// 二分查找 (非递归算法)
export function binarySearchShadow(arr, target) {
  let low = 0,
    high = arr.length - 1;
  while (low <= high) {
    let mid = parseInt((high + low) / 2);
    if (target === arr[mid]) {
      return mid;
    } else if (target > arr[mid]) {
      low = mid + 1;
    } else if (target < arr[mid]) {
      high = mid - 1;
    }
  }
  return -1;
};

export function binarySearchRecursive(arr, low, high, key) {
  if (low > high) {
    return -1;
  }
  var mid = parseInt((high + low) / 2);
  if (arr[mid] == key) {
    return mid;
  } else if (arr[mid] > key) {
    high = mid - 1;
    return binarySearchRecursive(arr, low, high, key);
  } else if (arr[mid] < key) {
    low = mid + 1;
    return binarySearchRecursive(arr, low, high, key);
  }
};


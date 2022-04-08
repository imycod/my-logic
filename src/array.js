// 贪婪findIndex 从后往前找，找到一个就返回
Array.prototype.findIndexFromEnd = function (callback) {
  let index = -1
  for (let i = this.length; i > 0; i--) {
    const element = this[i - 1];
    if (i === 0 && callback(element, i - 1) === -1) {
      index = -1;
      return index;
    }
    if (callback(element, i - 1) !== -1) {
      return callback(element, i - 1)
    }
    if (callback(element, i - 1) === -1 && i !== 0) {
      continue
    }
  }
}



let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

export function findlastIndex(arr1, num) {
  let len = arr1.length,
    index = -1;
  while (index < len) {
    ++index
    if (arr1[index] < num) {

    } else {
      return index - 1
    }
  }
}
console.log(findlastIndex(arr1, 3));


Array.prototype.findlastIndex = function (callback) {
  let len = this.length,
    index = -1;

  while (index < len) {
    ++index
    const value = callback(this[index], index)
    // if (value === undefined) {
    //   return callback(this, index)
    // }
    if (!value) {
      return index - 1
    }
  }
}
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const index = arr3.findlastIndex(function (item, index) {
  return item <= 8
})
console.log("index", index);

let arras = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(arras.findlastIndex(function (num) {
  return num <= 3
}));


// array to tree
export function arrayToTree(arr) {
  const tree = [];
  const map = {};
  for (let i = 0; i < arr.length; i++) {
    const node = arr[i];
    node.children = [];
    map[node.id] = node;
    // console.log("map[node.id]",map[node.id]);
    // console.log("node",node);
    if (node.parentId) {
      map[node.parentId].children.push(node);
    } else {
      tree.push(node);
    }
  }
  return tree;
}

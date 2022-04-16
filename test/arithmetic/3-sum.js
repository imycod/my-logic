
function binarySearch(arr, target) {
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


//  arr[i] + arr[j] + arr[k] =0
//  arr[i] + arr[j] = -arr[k]
//  arr[k]  = - arr[j] - arr[i]
function threeSum(arr) {
  arr.sort((a, b) => a - b)
  let n = arr.length - 1
  let result = []
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const complement = -arr[i] - arr[j]
      const index = binarySearch(arr, complement)
      if (index > -1) {
        // result.push([index, i, j])
        result.push([arr[index], arr[i], arr[j]])
        n -= 1
      }
    }
  }
  return result
}

// function threeSum2(arr) {
//   arr.sort((a, b) => a - b)
//   let i = 0;
//   let n = arr.length - 1;
//   let result = []
//   while (i < n) {
//     for (let j = i + 1; j < n; j++) {
//       const complement = -arr[i] - arr[j]
//       const index = binarySearch(arr, complement)
//       if (index > -1) {
//         result.push([arr[index], arr[i], arr[j]])
//         n -= 1
//         break
//       }
//     }
//     i += 1
//   }
//   return result
// }

console.log(threeSum([-1, 0, 1, 2, -1, -4]));


// /**
// * @param {number[]} nums
// * @return {number[][]}
// */

// var threeSum = function (nums) {
//   //用来存取最后结果集
//   let result = new Array();
//   //头指针
//   let head;
//   //尾指针
//   let end;
//   //固定值
//   let fixedVal;

//   //排序
//   nums.sort((a, b) => {
//     return a - b;
//   });

//   //判断数组内元素是否都为整数或负数，直接返回
//   if (nums[0] > 0 || nums[nums.length - 1] < 0) return result;

//   // 开始遍历
//   for (let i = 0; i < nums.length; i++) {
//     //固定值
//     fixedVal = nums[i];
//     // 如果前后元素相同，跳过此次循环（固定值）
//     if (fixedVal === nums[i - 1]) continue;
//     //一开始的固定值为nums[0],所以头指针为 i+1 下一个元素
//     head = i + 1;
//     //尾指针
//     end = nums.length - 1;
//     //如果头指针小于尾指针元素
//     while (head < end) {
//       //判断固定值+头指针+尾指针是否等于0
//       if (nums[head] + nums[end] + fixedVal === 0) {
//         //声明数组，存放这三个值
//         let group = new Array();
//         group.push(nums[head]);
//         group.push(nums[end]);
//         group.push(fixedVal);
//         result.push(group);
//         //存放完毕之后，不要忘记头指针和尾指针的移动(否则会产生死循环)
//         head += 1;
//         end -= 1;
//         //如果头指针满足小于尾指针且移动后的指针和移动前的指针元素相等，再往前移动
//         while (head < end && nums[head] === nums[head - 1]) {
//           head += 1;
//         }
//         //如果头指针满足小于尾指针且移动后的指针和移动前的指针元素相等，再往后移动
//         while (head < end && nums[end] === nums[end + 1]) {
//           end -= 1;
//         }
//         //小于 0 需要移动头指针，因为尝试着让数据比原有数据大一点
//       } else if (nums[head] + nums[end] + fixedVal < 0) {
//         head++;
//       } else {
//         //否则，尾指针向前移动，让数据小于元数据
//         end--;
//       }
//     }
//   }
//   return result;
// }
// //测试
// let nums = [-1, 0, 1, 2, -1, -4];
// threeSum(nums);
// console.log(threeSum(nums));

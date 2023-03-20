const binSearchReccursive = (arr, start, end, target, flag) => {
  if (arr.length === 0) {
    return -1;
  }
  if (end < start) {
    return -1;
  }
  let len = end - start,
    mid = start + Math.floor(len / 2);
  if (target > arr[mid]) {
    return binSearchReccursive(arr, mid + 1, end, target, flag);
  } else if (target < arr[mid]) {
    return binSearchReccursive(arr, start, mid - 1, target, flag);
  } else {
    if (flag === "left") {
      if (mid > 0 && arr[mid - 1] === target) {
        return binSearchReccursive(arr, start, mid - 1, target, flag);
      } else {
        return mid;
      }
    }
    if (flag === "right") {
      if (mid < arr.length - 1 && arr[mid + 1] === target) {
        return binSearchReccursive(arr, mid + 1, end, target, flag);
      } else {
        return mid;
      }
    }
  }
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {  
  let firstIndex = binSearchReccursive(
      nums,
      0,
      nums.length - 1,
      target,
      "left"
    ),
    secondIndex = binSearchReccursive(
      nums,
      0,
      nums.length - 1,
      target,
      "right"
    );
  return [firstIndex, secondIndex];
};

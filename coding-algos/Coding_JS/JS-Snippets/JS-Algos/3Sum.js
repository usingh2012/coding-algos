/**
 * @param {number[]} nums
 * @return {number[][]}
 * below approach we store each number in hashset and then we add two
 * numbers and find the complement in the hashset.
 * For distinctness we have to check for previous values.
 * If previous value is same in the loop then continue with next iteration
 *
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  let toReturn = [],
    toFind = {};
  for (let i = 2; i < nums.length; i++) {
    toFind[nums[i]] = i;
  }
  console.dir(toFind);
  console.dir(nums);
  let previous;
  for (let j = 0; j < nums.length; j++) {
    if (previous === nums[j]) {
      continue;
    }
    previous = nums[j];
    if (nums[j] > 0) {
      return toReturn;
    }
    let previousK;
    for (let k = j + 1; k < nums.length; k++) {
      let twoSum = nums[j] + nums[k];
      if (twoSum > 0) {
        continue;
      }
      if (previousK === nums[k]) {
        continue;
      }
      previousK = nums[k];
      let twoSumCompliment = 0 - twoSum;

      console.log(twoSumCompliment);
      if (typeof toFind[twoSumCompliment] !== "undefined") {
        if (toFind[twoSumCompliment] > k) {
          let triads = [nums[j], nums[k], twoSumCompliment];
          toReturn.push(triads);
        }
      }
    }
  }
  return toReturn;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 * below approach uses 2 Pointer approach
 */
var threeSumUsing2Pointer = function (nums) {
  nums.sort((a, b) => a - b);
  let result = [];
  let previousIVal = null;
  for (let i = 0; i < nums.length; i++) {
    if (previousIVal === nums[i]) {
      continue;
    }
    previousIVal = nums[i];
    find2Sum(nums, i, result);
  }
  return result;
};
function find2Sum(nums, i, result) {
  let left = i + 1,
    right = nums.length - 1,
    targetSum = 0 - nums[i],
    previousLeft = null;
  while (left < right) {
    if (previousLeft === nums[left]) {
      continue;
    }
    previousLeft = nums[left];
    let total = nums[left] + nums[right];
    if (total > targetSum) {
      right--;
    } else if (total < targetSum) {
      left++;
    } else {
      let triad = [nums[i], nums[left], nums[right]];
      result.push(triad);
      right--;
      left++;
    }
  }
}


/**
 * https://leetcode.com/problems/3sum-closest/description/
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++){
    let newTarget = target - nums[i];
    
  }
};

function twoSumClosest() {
  
}

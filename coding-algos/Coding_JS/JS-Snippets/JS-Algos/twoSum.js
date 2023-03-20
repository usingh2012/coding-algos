//https://leetcode.com/problems/two-sum/
//Two sum brute force
function twoSum(inputArr, sum) {
  for (let i = 0; i < inputArr.length - 1; i++) {
    let toFind = sum - inputArr[i];
    for (j = i + 1; j < inputArr.length; j++) {
      if (toFind === inputArr[j]) {
        console.log(`Pair found at ${i} and ${j}`);
        return [i, j];
      }
    }
  }
  return null;
}

//Two Sum efficient
function twoSumEfficient(inputArr, sum) {
  let toStore = {};
  for (let i = 0; i < inputArr.length; i++) {
    let currentVal = inputArr[i];
    let toFind = sum - currentVal;
    let storedIndex = toStore[inputArr[i]];
    if (storedIndex > -1) {
      console.log(`Pair found at ${storedIndex} and ${i}`);
      return [storedIndex, i];
    } else {
      toStore[toFind] = i;
    }


  }
  return null;
}
const inputArr = [3, 1, 6, 12, 5];
twoSumEfficient(inputArr, 4);

/**
 * https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum2 = function(numbers, target) {
  let left = 0, right = numbers.length - 1;
  while (left < right) {
    let total = numbers[left] + numbers[right];
    if (total === target) {
      return [left + 1, right + 1];
    } else if (total > target) {
      right--;     
    } else {
      left++;
    }
  }
};

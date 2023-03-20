/*
Write a function called maxSubarraySum which accepts an array of integers and a number called n. 
The function should calculate the maximum sum of n consecutive elements in the array.
*/
const maxSubarraySum = (inputArr, n) => {
  if (n < 1) {
    return 0;
  }
  let maxSum = 0,
    sum,
    start = 0;
  for (let end = 0; end < inputArr.length; end++) {
    if (end - start < n) {
      maxSum += inputArr[end];
    } else {
      if (sum === undefined) {
        sum = maxSum;
      }
      sum = sum - inputArr[start] + inputArr[end];
      maxSum = Math.max(sum, maxSum);
      start++;
    }
  }
  return maxSum;
};

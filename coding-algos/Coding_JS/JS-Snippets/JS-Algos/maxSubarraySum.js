/*
Write a function called maxSubarraySum which accepts an array of integers and a number called n. 
The function should calculate the maximum sum of n consecutive elements in the array.
*/
const maxSubarraySum = (inputArr, n) => {
  if (n < 1) {
    return 0;
  }
  let maxSum = 0,
    sum = null,
    start = 0;
  for (let end = 0; end < inputArr.length; end++) {
    if (end - start < n) {
      maxSum += inputArr[end];
    } else {
      if (sum === null) {
        sum = maxSum;
      }
      sum = sum - inputArr[start] + inputArr[end];
      maxSum = Math.max(sum, maxSum);
      start++;
    }
  }
    console.log(maxSum);
  return maxSum;
};


maxSubarraySum([1,2,5,2,8,1,5],2) // 10
maxSubarraySum([1,2,5,2,8,1,5],4) // 17
maxSubarraySum([4,2,1,6],1) // 6
maxSubarraySum([4,2,1,6,2],4) // 13
maxSubarraySum([],4) // null


function maxSubarraySum1(arr, num){
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}
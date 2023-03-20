//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined


// function firstRecurringCharacter(input) {
//   const inputMap = {};
//   for (let i = 0; i < input.length; i++) {
//     let val = input[i];
//     if (inputMap[val] >= 0) {
//       return val;
//     } else {
//       inputMap[val] = i;
//     }
//   }
// }
// console.log(firstRecurringCharacter([1, 2, 2, 3, 1]));

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2

// const myarr = new MyArray();
// myarr.push('hi');
// console.log(myarr);

// input : Hi i am
//output : ma i ih
// function reverseString(str) {
//   let toArr = str.split('');
//   let reverseArr = [];
//   for (let i = toArr.length - 1; i >= 0; i--) {
//     reverseArr.push(toArr[i]);
//   }
//   return reverseArr.join('');
// }

// const inp = 'Hi I am';
// console.log(reverseString(inp));

//input = [1, 2, 5, 9], [2, 3, 5, 11, 12]
//output = [1, 2, 2, 3, 5, 5, 9, 11, 12]
// function mergeSortedArrays(arr1, arr2) {
//   let i = 0,
//     j = 0,
//     newArr = [],
//     totalItems = arr1.length + arr2.length;
//   for (let k = 0; k < totalItems; k++) {
//     if (i >= arr1.length) {
//       newArr.push(arr2[j]);
//       j++;
//       continue;
//     }
//     if (j >= arr2.length) {
//       newArr.push(arr1[i]);
//       i++;
//       continue;
//     }
//     if (arr1[i] <= arr2[j]) {
//       newArr.push(arr1[i]);
//       i++;
//     } else {
//       newArr.push(arr2[j]);
//       j++;
//     }
//   }
//   return newArr;
// }

// console.log(mergeSortedArrays([1, 2, 5, 9], [2, 3, 5, 11, 12]));
//[-2,1,-3,4,-1,2,1,-5,4] input // output 6
// var maxSubArray = function(nums) {
//   let sum = nums[0],
//     nextSum,
//     sumArr = [sum];
//   for (let i = 1; i < nums.length; i++) {
//     nextSum = nums[i] + sum;
//     if (nextSum < nums[i]) {
//       nextSum = nums[i];
//     }
//     if (sum < nextSum) {
//       sum = nextSum;
//     }
//     sumArr.push(sum);
//   }
//   return sumArr;
// };

// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))

//Recursion starts //

//factorial using iterative
// function factorialItr(num) {
//   if (num < 1) {
//     return 'bad input';
//   }
//   let factorial = 1;
//   for (let i = 1; i <= num; i++) {
//     factorial = factorial * i;
//   }
//   console.log(`The factorial for number ${num} is ${factorial}`);
//   return factorial;
// }

// //factorialItr(8);

// function factorialRecurrsion(num) {
//   if (num === 1) {
//     return 1;
//   }
//   let factorial = num * factorialRecurrsion(num - 1);
//   console.log(`The factorial for number ${num} is ${factorial}`);
//   return factorial;
// }

//factorialRecurrsion(3);

//Fibonacci starts

// function fibUsingItr(n) {
//   if (n < 2) {
//     return n;
//   }
//   if (n === 2) {
//     return 1;
//   }
//   let arr = [0, 1, 1];
//   for (let i = 4; i <= n; i++) {
//     let sum = arr[i - 2] + arr[i - 3];
//     arr.push(sum);
//   }
//   console.log("The fib sequence is " + arr.join(' , '));
//   console.log(`The fib number for ${n} is ${arr[arr.length - 1]}`);
// }

// //get the nth fib number
let calculations = 0, cache = {};
function fibUsingRecurrsion(n) {  
  calculations = calculations + 1;
  if(n in cache){
    return cache[n];
  }
  if (n === 1) {
    return 0;
  } else if (n <= 3) {
    return 1;
  }
  let result = fibUsingRecurrsion(n - 2) + fibUsingRecurrsion(n - 1);
  cache[n] = result;
  return result;
}

console.log('the fib is ' + fibUsingRecurrsion(12));
console.log('The no of calculations are ' + calculations);

//fibUsingItr(9);

//Fibonacci ends

//Implement a function that reverses a string using iteration...and then recursion!
// function reverseStringItr(str) {
//   let reversedStr = [],
//     reversedStr2 = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversedStr.push(str[i]);
//     reversedStr2 = reversedStr2 + str[i];
//   }
//   //return reversedStr.join('');
//   console.log(`The reverse of ${str} is ${reversedStr2}`);
//   return reversedStr2;
// }

// const reverseStringRecursion = (str) => {
//   if (str.length === 1) {
//     return str;
//   }
//   let len = str.length;
//   let result = str[len - 1] + reverseStringRecursion(str.slice(0, str.length - 1));
//   return result;
// }

// function reverseStringRecursive(str) {
//   if (str === "") {
//     return "";
//   } else {
//     return reverseStringRecursive(str.substr(1)) + str.charAt(0);
//   }
// }
// console.log(reverseStringRecursive('yoyo mastery'));
//console.log(reverseStringRecursion('yoyo mastery'));

//reverseStringItr('yoyo mastery')
//should return: 'yretsam oyoy'

//Recursion ends//

//Sorting Starts //

// const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// const swap = (arr, i, j) => {

//   let temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
// }


// function bubbleSort(arr) {
//   //arr = [1, 4, 2,9,20, 14, 16, 12]
//   // for(let i = 0; i < arr.length ; i++){
//   //   for(let j = i+1; j < arr.length ; j++){

//   //   }
//   // }
//   for (let i = arr.length - 1; i > 0; i--) {
//     for (let j = 0; j < i; j++) {
//       if (arr[j] > arr[j + 1]) {
//swap(arr , j , j+1);
// let temp = arr[j];
// arr[j] = arr[j + 1];
// arr[j + 1] = temp;
//       }
//     }
//   }
//   console.log(`The sorted array using bubblesort is ${arr}`);

// }

// bubbleSort(numbers);



// function selectionSort(arr) {
//   const len = arr.length;
  // for (let i = 0; i < len; i++) {
  //   let min = i;
  //   for (let j = i + 1; j < len; j++) {
  //     if (arr[min] > arr[j]) {
  //       min = j;
  //     }
  //   }
  //   if (arr[min] !== arr[i]) {
  //     //swap
  //     swap(arr, i, min);
  //   }
  // }
//   console.log(`The numbers are sorting using selection sort is ${arr}`);
// }
//selectionSort(numbers);

// function insertionSort(arr) {
  // for (let i = 1; i < arr.length; i++) {
  //   // for(let j = i+1; j > 0; j--){
  //   //   if(arr[j] < arr[j - 1]){
  //   //     swap(arr, j-1, j);
  //   //   }else{
  //   //     break;
  //   //   }    
  //   // }
  //   let current = arr[i],
  //     j = i - 1;
  //   while (j >= 0 && arr[j] > current) {
  //     arr[j + 1] = arr[j];
  //     j--;
  //   }//here no swapping but the numbers higher than current shift one place ahead till the number which is lesser than current is encounter and at that particular index current is inserted as other higher numbers are already shifter ahead.
  //   arr[j + 1] = current;
  // }
//   console.log(`Insertion sort ${arr}`);
// }

//insertionSort(numbers);

// function mergeSort(array) {
//   if (array.length === 1) {
//     return array
//   }
//   // Split Array in into right and left
//   let mid = array.length / 2,
//     left = array.slice(0, mid),
//     right = array.slice(mid);
//   return merge(
//     mergeSort(left),
//     mergeSort(right)
//   )
//   // console.log('Merged Arr is ' + mergedArr);
//   //return mergedArr;
// }

// function merge(arr1, arr2) {
//   let i = 0,
//     j = 0,
//     newArr = [],
//     totalItems = arr1.length + arr2.length;
//   for (let k = 0; k < totalItems; k++) {
//     if (i >= arr1.length) {
//       newArr.push(arr2[j]);
//       j++;
//       continue;
//     }
//     if (j >= arr2.length) {
//       newArr.push(arr1[i]);
//       i++;
//       continue;
//     }
//     if (arr1[i] <= arr2[j]) {
//       newArr.push(arr1[i]);
//       i++;
//     } else {
//       newArr.push(arr2[j]);
//       j++;
//     }
//   }
//   return newArr;
// }

// console.log('MergeSort : ' + mergeSort(numbers));

// function quickSort(array, left, right) {
//   if (left < right) {
//     let pivot = partition(array, left, right);
//     quickSort(array, left, pivot - 1);
//     quickSort(array, pivot + 1, right);
//   }
//   return array;  
// }

// // this function will put all the elements greater than pivot to the right of pivot and lesser than pivot to the left of the pivot..
// // The pivot is the rightmost element of the array..
// // Once pivot is placed at the new position.. The new position is returned from this function.
// function partition(array, left, right) {
//   let pivotPosition = left;
//   for (let i = left; i < right; i++) {
//     if (array[i] <= array[right]) {
//       swap(array, i, pivotPosition);
//       pivotPosition++;
//     }
//   }
//   swap(array, pivotPosition, right);
//   return pivotPosition;
// }

// //Select first and last index as 2nd and 3rd parameters
// console.log(quickSort(numbers, 0, numbers.length - 1));

//Sorting ends//
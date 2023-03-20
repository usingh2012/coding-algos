// Two sum brute force
// function twoSum(inputArr, sum) {
//   for (let i = 0; i < inputArr.length - 1; i++) {
//     let toFind = sum - inputArr[i];
//     for (j = i + 1; j < inputArr.length; j++) {
//       if (toFind === inputArr[j]) {
//         console.log(`Pair found at ${i} and ${j}`);
//         return [i, j];
//       }
//     }
//   }
//   return null;
// }

// function twoSumEfficient(inputArr, sum) {
//   let toStore = {};
//   for (let i = 0; i < inputArr.length; i++) {
//     let currentVal = inputArr[i];
//     let toFind = sum - currentVal;
//     let storedIndex = toStore[inputArr[i]];
//     if (storedIndex > -1) {
//       console.log(`Pair found at ${storedIndex} and ${i}`);
//       return [storedIndex, i];
//     } else {
//       toStore[toFind] = i;
//     }


//   }
//   return null;
// }
// const inputArr = [3, 1, 6, 12, 5];
// // twoSumEfficient(inputArr, 4);

// //two sum ends

// //Container with most water
// // https://leetcode.com/problems/container-with-most-water/
// function containerWithMostWaterBrute(inputArr) {
//   let waterArea = 0;
//   for (let i = 0; i < inputArr.length - 1; i++) {
//     for (let j = i + 1; j < inputArr.length; j++) {
//       let currentArea = Math.min(inputArr[i], inputArr[j]) * (j - i);

//       waterArea = Math.max(currentArea, waterArea);

//     }
//   }
//   console.log(`The water area is ${waterArea}`);
//   return waterArea;
// }

// function containerWithMostWaterOptimal(inputArr) {
//   let waterArea = 0,
//     start = 0,
//     end = inputArr.length - 1;
//   while (end > start) {
//     let height = Math.min(inputArr[start], inputArr[end]);
//     let width = end - start;
//     let area = height * width;
//     waterArea = Math.max(area, waterArea);
//     if (inputArr[start] > inputArr[end]) {
//       end--;
//     } else {
//       start++;
//     }
//   }

//   console.log(`The water area is ${waterArea}`);
//   return waterArea;
// }

// const test = [1, 8, 6, 2, 5, 4, 8, 3, 7];
// const test2 = [1, 2, 4, 3];
// const test3 = [2, 3, 10, 5, 7, 8, 9];
// // containerWithMostWaterBrute(test3);
// // containerWithMostWaterOptimal(test3);

// //Trapping Rain Water

// function trappingRainWater(inputArr) {
//   let waterArea = 0, i = 0;
//   while (i < inputArr.length - 1) {
//     let end = i + 1, occupied = 0, nextHighest = 0, nextHighestIndex = i + 1, area = 0;
//     while (end < inputArr.length) {
//       if (inputArr[end] > nextHighest) {
//         nextHighestIndex = end;
//         nextHighest = inputArr[end];
//       }

//       if (inputArr[end] >= inputArr[i]) {
//         nextHighestIndex = end;
//         nextHighest = inputArr[end];
//         break;
//       }


//       end++;
//     }
//     let height = Math.min(inputArr[i], nextHighest);
//     let width = nextHighestIndex - i - 1;
//     if (width > 0) {
//       let toIter = i + 1;
//       while (toIter < nextHighestIndex) {
//         occupied = occupied + inputArr[toIter];
//         toIter++;
//       }
//       area = (width * height) - occupied;
//     }
//     waterArea = waterArea + area;
//     // console.log({ occupied, area, waterArea, height, width });
//     i = nextHighestIndex;
//   }
//   console.log({ waterArea });
//   return waterArea;
// }
// const inputForRainWater = [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2];
// //trappingRainWater(inputForRainWater);

// const getTrappedRainwater = function(heights) {
//   let totalWater = 0, maxLeft = 0, maxRight = 0, currentMaxHeightIndex = -1;

//   for (let p = 0; p < heights.length; p++) {
//     let leftP = p, rightP = p;
//     maxLeft = Math.max(maxLeft, heights[leftP]);

//     if (p > currentMaxHeightIndex) {
//       maxRight = 0;
//       while (rightP < heights.length) {
//         if (maxRight < heights[rightP]) {
//           maxRight = heights[rightP];
//           currentMaxHeightIndex = rightP;
//         }
//         rightP++;
//       }
//     }


//     const currentWater = Math.min(maxLeft, maxRight) - heights[p];

//     if (currentWater >= 0) {
//       totalWater += currentWater;
//     }
//   }
//   console.log({ totalWater });
//   return totalWater;
// }

// //Height at any point is min of maxleft from that point and maxright from that point minus the height at that point..
// const getTrappedRainWaterOptimal = function(heights) {
//   let left = 0,
//     right = heights.length - 1,
//     maxLeft = heights[left],
//     maxRight = heights[right],
//     currentArea = 0,
//     waterArea = 0;
//   while (left < right) {
//     currentArea = 0;
//     if (heights[left] < heights[right]) {
//       if (heights[left] >= maxLeft) {
//         maxLeft = heights[left];
//       } else {
//         // if heights[left] is lesser than heights[right] then it means that maxleft is lesser than maxRight because we are always moving or changing the smaller of the compared index(left,right)..
//         currentArea = maxLeft - heights[left];
//       }
//       left++;
//     } else {
//       if (heights[right] >= maxRight) {
//         maxRight = heights[right];
//       } else {
//         currentArea = maxRight - heights[right];
//       }
//       right--;
//     }
//     if (currentArea > 0) {
//       waterArea += currentArea;
//     }
//   }
//   //  console.log(`The water area is ${waterArea}`);
//   return waterArea;
// }

// //getTrappedRainwater(inputForRainWater);
// //getTrappedRainWaterOptimal(inputForRainWater);

// const getEffectiveString = function(str) {
//   let toReturn = [];
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === '#') {
//       toReturn.pop();
//       i--;
//     } else {
//       toReturn.push(str[i]);
//     }
//   }

//   return toReturn;
// }

// const backspaceCompare = function(s, t) {

//   let first = getEffectiveString(s);
//   let second = getEffectiveString(t);

//   if (first.length !== second.length) {
//     return false;
//   }
//   for (let i = 0; i < first.length; i++) {
//     if (first[i] !== second[i]) {
//       return false;
//     }
//   }

//   return true;

// };


// const str1 = "ab#c", str2 = "ad#c";
// const str3 = "ab##", str4 = "c#d#";

// console.log(backspaceCompare(str1, str2));
// console.log(backspaceCompare(str3, str4));

// const backspaceCompareOptimized = function(s, t) {

//   let i = s.length - 1, j = t.length - 1;

//   while (i >= 0 || j >= 0) {


//     if(s[i] === '#'){
//       let backSpaceCounter = 1;      
//       while(backSpaceCounter > 0){
//         i--;
//         if(s[i] === '#'){
//           backSpaceCounter++;
//         }else{        
//           backSpaceCounter--;
//         }
//       }
//     }
//     if(t[j] === '#') {
//      let backSpaceCounter = 1;      
//       while(backSpaceCounter > 0){
//         j--;
//         if(t[j] === '#'){
//           backSpaceCounter++;
//         }else{        
//           backSpaceCounter--;
//         }
//       }
//     }

//     if(s[i] !== t[j]){
//       return false;
//     }
//     i--;
//     j--;

//   }
//   return true;
// };

// console.log(backspaceCompareOptimized(str1, str2));
// console.log(backspaceCompareOptimized(str3, str4));


const isPalindrome = function(s) {
  s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  //console.log(s);
  
  //Way 1 : pointer from 2 ends::
//   let start = 0, end = s.length - 1;
//   while (start <= end) {
//     if (s[start] !== s[end])
//       return false;
//     start++;
//     end--;
//   }
//   return true;
  
  //Way 2 : pointer from middle::
  let middle = Math.floor(s.length / 2), left = middle - 1, right = middle;
  if(s.length%2 !== 0){
    left = right = middle;
  }
  while(left > -1 || right < s.length){
    if(s[left] !== s[right]){
      return false;
    }
    left--;
    right++;         
  }
  return true;  
};   

const palinString = "A man, a plan, a canal: Panama";
const p2 = 'abb'
console.log(isPalindrome(p2));

//check if palindrome by removing at most one character..
const almostPalindrome = function(s) {
  s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase(); 
  if(s.length <= 3){
    return true;
  }
  let counter = 0, 
    left = 0, right = s.length - 1,
    firstLeft, firstRight;
  while(left <= right){
    if(s[left] !== s[right]){
      if(counter === 0){
        firstLeft = left;
        firstRight = right;
        left++;        
      }else if(counter === 1){
        left = firstLeft;
        right = firstRight - 1;
      }else{
        return false;
      }
      counter++;
      continue;
    }
    right--;
    left++;
  }
  
  return true;
}

console.log(almostPalindrome("cbbcc"));
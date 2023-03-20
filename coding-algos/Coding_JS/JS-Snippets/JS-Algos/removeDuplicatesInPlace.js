let arr = [1, 2, 2, 1, 3, 4];

let arr1 = [1, 2, 2, 1, 3, 5, 4, 2, 6, 6, 3, 21, 1, 4];
let arr2 = [1, 2, 3, 4];

let left = 0;
right = arr.length - 1;
let totalCount = 0;
let arrMap = new Map();

while (left <= right) {
  let currentVal = arr[left];
  if (arrMap.has(currentVal)) {
    while (right >= left) {
      let rightVal = arr[right];
      if (!arrMap.has(rightVal)) {
        swap(arr, left, right);
        arrMap.set(rightVal, true);
        right--;
        break;
      }
      right--;
    }
  } else {
    arrMap.set(currentVal, true);
  }
  left++;
}

arr.length = right + 1;

function swap(arr, left, right) {
  [arr[left], arr[right]] = [arr[right], arr[left]];
}

// let arrMap = {},
//   currentPointer = null,
//     totalCount = 0;
//   count = 0;
// let result = [];
// for (let i = 0; i < arr.length; i++) {
//   let currentVal = arr[i];
//   if (typeof arrMap[currentVal] === "undefined") {
//     // result.push(arr[i]);
//     arrMap[currentVal] = i;
//     if (currentPointer) {
//       [arr[currentPointer], arr[i]] = [arr[i], arr[currentPointer]];
//       count--;
//       if (count > 0) {
//         currentPointer++;
//       } else {
//         currentPointer = null;
//       }
//     }
//   } else {
//     if (currentPointer === null) {
//       currentPointer = i;
//     }
//     count++;
//       totalCount++;
//   } //means duplicate value

// }
//   while(totalCount){
//         totalCount--;
//         arr.pop();
//     }
// console.log(arr);

// let arrMap = new Map();

// for(let i = arr.length - 1; i >= 0; i--){
//     let currentVal = arr[i];
//     if(arrMap.has(currentVal)){
//         arr.splice(i, 1);
//     }else{
//         arrMap.set(currentVal, true);
//     }
// } // reverse way

// for(let i = 0; i < arr.length; i++){
//     let currentVal = arr[i];
//     if(arrMap.has(currentVal)){
//         arr.splice(i, 1);
//         i--;
//     }else{
//         arrMap.set(currentVal, true);
//     }
// } // forward way

console.log(arr);

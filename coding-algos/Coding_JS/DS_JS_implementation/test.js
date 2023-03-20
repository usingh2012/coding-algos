//Sorting Starts //

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

const swap = (arr, i, j) => {

  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}


function bubbleSort(arr) {
  //arr = [1, 4, 2,9,20, 14, 16, 12]
  // for(let i = 0; i < arr.length ; i++){
  //   for(let j = i+1; j < arr.length ; j++){

  //   }
  // }
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
swap(arr , j , j+1);
let temp = arr[j];
arr[j] = arr[j + 1];
arr[j + 1] = temp;
      }
    }
  }
  console.log(`The sorted array using bubblesort is ${arr}`);

}

bubbleSort(numbers);



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
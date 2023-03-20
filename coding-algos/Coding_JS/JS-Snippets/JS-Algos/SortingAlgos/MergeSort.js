const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }
  // Split Array in into right and left
  let mid = array.length / 2,
    left = array.slice(0, mid),
    right = array.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
  // console.log('Merged Arr is ' + mergedArr);
  //return mergedArr;
}

function merge(arr1, arr2) {
  let i = 0,
    j = 0,
    newArr = [],
    totalItems = arr1.length + arr2.length;
  for (let k = 0; k < totalItems; k++) {
    if (i >= arr1.length) {
      newArr.push(arr2[j]);
      j++;
      continue;
    }
    if (j >= arr2.length) {
      newArr.push(arr1[i]);
      i++;
      continue;
    }
    if (arr1[i] <= arr2[j]) {
      newArr.push(arr1[i]);
      i++;
    } else {
      newArr.push(arr2[j]);
      j++;
    }
  }
  return newArr;
}
let startTime = new Date();
console.log("MergeSort : " + mergeSort(numbers));
let endTime = new Date();
console.log("Time taken for merge sort in ms is "+ (endTime - startTime));
const kthLargestElement = (arr, k) => {
  const index = arr.length - k;
  quickSelect(arr, 0, arr.length - 1, index);
  const kthLargest = arr[index];
  console.log(`Kth Largest element is ${kthLargest}`);
  return kthLargest;
};
let found = false;
const quickSelect = (arr, left, right, index) => {
  if (found) {
    return;
  }
  if (left < right) {
    let pivotPos = getPivot(arr, left, right);
    if (pivotPos === index) {
      found = true;
      return;
    } else if (pivotPos > index) {
        quickSelect(arr, left, pivotPos - 1, index);
      console.log(arr.join(" , "));
    } else if (pivotPos < index) {        
        quickSelect(arr, pivotPos + 1, right, index);
    }
  }
};

const getPivot = (arr, left, right) => {
  let pivotElement = arr[right],
    pivotPos = left;
  for (let i = left; i < right; i++) {
    if (arr[i] < pivotElement) {
      swap(arr, i, pivotPos);
      pivotPos++;
    }
  }
  swap(arr, pivotPos, right);
  return pivotPos;
};

const swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]]; //swap
};

kthLargestElement([5, 3, 8, 2, 4, 1], 3);

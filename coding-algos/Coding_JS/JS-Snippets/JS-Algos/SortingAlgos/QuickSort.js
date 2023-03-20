const numbers = [99, 44, 6, 92, 1, 5, 63, 87, 283, 4, 76];

const swap = (arr, i, j) => {
  //   let temp = arr[i];
  //   arr[i] = arr[j];
  //     arr[j] = temp;
  [arr[i], arr[j]] = [arr[j], arr[i]];
};

//This will sort by putting pivot at its correct position in each recursion.
function quickSort(array, left, right) {
  if (left < right) {
    let pivot = partition(array, left, right);
    quickSort(array, left, pivot - 1);
    quickSort(array, pivot + 1, right);
  }
  return array;  
}

// this function will put all the elements greater than pivot to the right of pivot and lesser than pivot to the left of the pivot..
// The pivot is chosen to be the rightmost element of the array..
// Whenever we encounter any element lesser than the pivot we move it to the pivotPosition variable position(leftmost part) and increment it.
// For variable higher than pivot we dont do anything.
// In the end, all variable lesser than pivot will be positioned at the start till pivot position. 
// Place the pivot element which is the rightmost element at the pivot position by swapping again.
// Once pivot is placed at the new position.. The new position is returned from this function.
function partition(array, left, right) {
  let pivotPosition = left;
  for (let i = left; i < right; i++) {
    if (array[i] <= array[right]) {
      swap(array, i, pivotPosition);
      pivotPosition++;
    }
  }
  swap(array, pivotPosition, right);
  return pivotPosition;
}

//Select first and last index as 2nd and 3rd parameters
console.log(quickSort(numbers, 0, numbers.length - 1));
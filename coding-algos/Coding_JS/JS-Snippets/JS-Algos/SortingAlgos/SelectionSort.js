const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

const swap = (arr, i, j) => {
  //   let temp = arr[i];
  //   arr[i] = arr[j];
  //     arr[j] = temp;
  [arr[i], arr[j]] = [arr[j], arr[i]];
};

function selectionSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    let min = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    if (arr[min] !== arr[i]) {
      //swap
      swap(arr, i, min);
    }
  }
  console.log(`The numbers are sorting using selection sort is ${arr}`);
}
selectionSort(numbers);
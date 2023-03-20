const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

const swap = (arr, i, j) => {
  //   let temp = arr[i];
  //   arr[i] = arr[j];
  //     arr[j] = temp;
  [arr[i], arr[j]] = [arr[j], arr[i]];
};

function bubbleSort(nums) {
  let arr = [...nums];
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  console.log(`The sorted array using bubblesort is ${arr}`);
}

bubbleSort(numbers);
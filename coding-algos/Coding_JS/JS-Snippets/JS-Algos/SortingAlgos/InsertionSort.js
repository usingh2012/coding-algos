const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i],
      j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }//here no swapping but the numbers higher than current shift one place ahead till the number which is lesser than current is encounter and at that particular index current is inserted as other higher numbers are already shifter ahead.
    arr[j + 1] = current;
  }
  console.log(`Insertion sort ${arr}`);
}

insertionSort(numbers);

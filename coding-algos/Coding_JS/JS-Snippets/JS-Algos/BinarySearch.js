const binSearch = (arr, val) => {
  if (arr.length === 0) {
    return -1;
  }
  let start = 0,
    end = arr.length - 1;

  while (start <= end) {
    let len = end - start,
      mid = start + Math.floor(len / 2);
    if (val === arr[mid]) {
      return mid;
    } else if (val > arr[mid]) {
      start = mid + 1;
    } else if (val < arr[mid]) {
      end = mid - 1;
    }
    }
    return -1;  
};

const binSearchReccursive = (arr, start, end, val) => {
  if (arr.length === 0) {
    return -1;    
  }
  if (end < start) {
    return -1;
  }
  let len = end - start,
    mid = start + Math.floor(len / 2);
  if (val > arr[mid]) {
    return binSearchReccursive(arr, mid + 1, end, val);
  } else if (val < arr[mid]) {
    return binSearchReccursive(arr, start, mid - 1, val);
  } else {
    return mid;
  }

}

let arr1 = [2, 4, 6, 7, 12, 15, 16, 24]
console.log(`The position of value found is ${binSearchReccursive(arr1, 12)}`);

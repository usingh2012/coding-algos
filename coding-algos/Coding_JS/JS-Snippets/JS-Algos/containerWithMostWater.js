//Container with most water
// https://leetcode.com/problems/container-with-most-water/
function containerWithMostWaterBrute(inputArr) {
  let waterArea = 0;
  for (let i = 0; i < inputArr.length - 1; i++) {
    for (let j = i + 1; j < inputArr.length; j++) {
      let currentArea = Math.min(inputArr[i], inputArr[j]) * (j - i);

      waterArea = Math.max(currentArea, waterArea);

    }
  }
  console.log(`The water area is ${waterArea}`);
  return waterArea;
}

function containerWithMostWaterOptimal(inputArr) {
  let waterArea = 0,
    start = 0,
    end = inputArr.length - 1;
  while (end > start) {
    let height = Math.min(inputArr[start], inputArr[end]);
    let width = end - start;
    let area = height * width;
    waterArea = Math.max(area, waterArea);
    if (inputArr[start] > inputArr[end]) {
      end--;
    } else {
      start++;
    }
  }

  console.log(`The water area is ${waterArea}`);
  return waterArea;
}

const test = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const test2 = [1, 2, 4, 3];
const test3 = [2, 3, 10, 5, 7, 8, 9];
containerWithMostWaterBrute(test3);
containerWithMostWaterOptimal(test3);
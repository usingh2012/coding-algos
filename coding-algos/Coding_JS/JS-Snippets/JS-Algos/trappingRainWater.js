/* https://leetcode.com/problems/trapping-rain-water/
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) 
is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
Algorithm:
At any point the trapped water can be found out by finding the maxLeft and maxRight from that point. 
These serve as the container for that point.
So min of these 2 points minus the height of the point is the level of water at that point.
To do this in optimized way, start the left at 0 and right at arraylength - 1. 
initialize maxLeft as value at left and maxRight as value at right. 
There is certainity that for any point at left, 
maxLeft is the max encountered till then and for any point at right, 
maxRight is the max value encountered till then. 
What is required is minimum of these two for calculation. 
So move left towards end of array and right towards start of array. 
To move left or right decide which value is lesser, array[left] or array[right]. Move the lesser one. 
At any point if the value of that point is higher than maxLeft, update maxLeft and same for maxRight. 
If values are in between then update the waterarea. 
For ex. If point at currentLeft is lesser than point at currentRight, 
you have to calculate the point at left which is the lower of two
and move it towards end after calculating the area there or update the maxLeft if currentLeft is higher than the maxLeft.
*/

var trap = function (height) {
  let left = 0,
    right = height.length - 1,
    totalArea = 0,
    maxLeft = height[left],
    maxRight = height[right];

  //First way::
  //let currentIndex = left;
  // while (left <= right) {
  //   if (maxLeft < height[left]) {
  //     maxLeft = height[left];
  //   }
  //   if (maxRight < height[right]) {
  //     maxRight = height[right];
  //   }
  //   let currentArea = Math.min(maxLeft, maxRight) - height[currentIndex];
  //   if (currentArea > 0) {
  //     totalArea += currentArea;
  //   }
  //   if (height[left] < height[right]) {
  //     left++;
  //     currentIndex = left;
  //   } else {
  //     right--;
  //     currentIndex = right;
  //   }
  // }

  //Second Way::
  while (left < right) {
    let curArea = -1;
    if (maxLeft <= maxRight) {
      if (maxLeft < height[left]) {
        maxLeft = height[left];
        left++;
        continue;
      }
      curArea = maxLeft - height[left];
      if (curArea > 0) {
        totalArea += curArea;
      }
      left++;
    } else {
      if (maxRight < height[right]) {
        maxRight = height[right];
        right--;
        continue;
      }
      curArea = maxRight - height[right];
      if (curArea > 0) {
        totalArea += curArea;
      }
      right--;
    }
  }
  console.log(totalArea);
  return totalArea;
};
trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
trap([4, 2, 0, 3, 2, 5]);

//Brute Force
function trappingRainWater(inputArr) {
  let waterArea = 0, i = 0;
  while (i < inputArr.length - 1) {
    let end = i + 1, occupied = 0, nextHighest = 0, nextHighestIndex = i + 1, area = 0;
    while (end < inputArr.length) {
      if (inputArr[end] > nextHighest) {
        nextHighestIndex = end;
        nextHighest = inputArr[end];
      }

      if (inputArr[end] >= inputArr[i]) {
        nextHighestIndex = end;
        nextHighest = inputArr[end];
        break;
      }


      end++;
    }
    let height = Math.min(inputArr[i], nextHighest);
    let width = nextHighestIndex - i - 1;
    if (width > 0) {
      let toIter = i + 1;
      while (toIter < nextHighestIndex) {
        occupied = occupied + inputArr[toIter];
        toIter++;
      }
      area = (width * height) - occupied;
    }
    waterArea = waterArea + area;
    // console.log({ occupied, area, waterArea, height, width });
    i = nextHighestIndex;
  }
  console.log({ waterArea });
  return waterArea;
}
const inputForRainWater = [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2];
//trappingRainWater(inputForRainWater);
//https://leetcode.com/problems/min-cost-climbing-stairs/

/**
 * @param {number[]} cost
 * @return {number}
 * TO reach nth step, compare n-1 and n-2 step cost and whichever is lesser add it to nth step cost.
 * At the end return n+1 step cost.
 */
var minCostClimbingStairs = function (cost) {
  if (cost.length === 0) {
    return 0;
  }
  if (cost.length === 1) {
    return cost[0];
  }
  cost.push(0);  
  let prev = cost[1],
    beforePrev = cost[0];
  for (let i = 2; i < cost.length; i++) {
    let min = Math.min(prev, beforePrev);
    beforePrev = prev;
    prev = cost[i] + min;
  }
    return prev;
};

var minCostClimbingStairsUsingRecursion = function (cost) {
  if (cost.length === 0) {
    return 0;
  }
  cost.push(0);
  let minCost = [];
  const minCostRecursion = (index) => {
    if (typeof minCost[index] !== "undefined") {
      return minCost[index];
    }
    let toReturn;
    if (index < 2) {
      toReturn = cost[index];
      minCost[index] = toReturn;
      return toReturn;
    }
    toReturn =
      cost[index] +
      Math.min(minCostRecursion(index - 1), minCostRecursion(index - 2));
    minCost[index] = toReturn;
    return toReturn;
  };
  return minCostRecursion(cost.length - 1);
};

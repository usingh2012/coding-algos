//https://leetcode.com/problems/minimum-path-sum/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  const row = grid.length - 1;
 const col = grid[row].length - 1;
 const dp = new Array(row).fill(0).map( () => new Array(col).fill(null));
 return minPathSumRecursive(grid, row, col, dp);
};

const minPathSumRecursive = function (grid, row, col, dp) {
 if(row === 0 && col === 0){
     return grid[row][col];
 }
 if(dp[row][col] !== null){
     return dp[row][col];
 }
if(row < 0){
   return Infinity;
}
 if(col < 0){
     return Infinity;
 }

const toReturn =
 grid[row][col] +
 Math.min(
   minPathSumRecursive(grid, row - 1, col, dp), //up
   minPathSumRecursive(grid, row, col - 1, dp) //left
 );
 dp[row][col] = toReturn;
// console.log(`Value at ${(row, col)} is ${toReturn}`);
return  dp[row][col];
};

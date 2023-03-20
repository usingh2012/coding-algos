/**
 * @param {character[][]} grid
 * @return {number}
 */

var numIslands = function (grid) {
  let visited = new Array(grid.length)
      .fill(0)
      .map(() => new Array(grid[0].length).fill(false)),
    islandCount = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let column = 0; column < grid[0].length; column++) {
      if (grid[row][column] === "0" || visited[row][column]) {
        continue;
      } else {
        islandCount++;
        dfsTraversal(grid, row, column, visited);
      }
    }
  }
};
const directions = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

function dfsTraversal(arr, row, column, visited) {
  if (
    row < 0 ||
    row >= arr.length ||
    column < 0 ||
    column >= arr[0].length ||
    visited[row][column] ||
    arr[row][column] === "0"
  ) {
    return;
  }
    visited[row][column] = true;
  for (let direction of directions) {
    dfsTraversal(arr, row + direction[0], column + direction[1], visited);
  }
}

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const directions = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];
var setZeroes = function (matrix) {
  let zeroesArr = [];
  for (let row = 0; row < matrix.length; row++) {
    for (let column = 0; column < matrix[row].length; column++) {
      if (matrix[row][column] === 0) {
        zeroesArr.push([row, column]);
      }
    }
  }
  for (let items of zeroesArr) {
    let row = items[0],
      column = items[1];
    for (let direction of directions) {
      let newRow = row + direction[0],
        newColumn = column + direction[1];
      while (
        newRow < matrix.length &&
        newRow >= 0 &&
        newColumn < matrix[0].length &&
        newColumn >= 0
      ) {
        matrix[newRow][newColumn] = 0;
        newRow = newRow + direction[0];
        newColumn = newColumn + direction[1];
      }
    }
  }
};

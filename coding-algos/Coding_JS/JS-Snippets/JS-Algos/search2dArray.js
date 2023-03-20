/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const directions = [
  [-1, 0], //top
  [0, 1], //right
  [1, 0], //bottom
  [0, -1], //left
];
var searchMatrix = function (matrix, target) {
  let toIterateQ = [];
  toIterateQ.push([
    Math.floor(matrix.length / 2),
    Math.floor(matrix[0].length / 2),
  ]);
  while (toIterateQ.length) {
    let [row, column] = toIterateQ.shift();
    if (matrix[row][column] === false) {
      continue;
    }
    if (matrix[row][column] === target) {
      return true;
    }
    for (let direction of directions) {
      let newRow = row + direction[0],
        newColumn = column + direction[1];
      if (
        newRow < 0 ||
        newRow >= matrix.length ||
        newColumn < 0 ||
        newColumn >= matrix[0].length
      ) {
        continue;
      }
      if (matrix[newRow][newColumn] === false) {
        continue;
      }
      if (matrix[row][column] > target) {
        if (direction[0] === -1 || direction[1] === -1) {
          toIterateQ.push([newRow, newColumn]);
        } else {
          matrix[newRow][newColumn] = false;
        }
      } else {
        if (direction[0] === 1 || direction[1] === 1) {
          toIterateQ.push([newRow, newColumn]);
        } else {
          matrix[newRow][newColumn] = false;
        }
      }
    }
    matrix[row][column] = false;
  }
  return false;
};

/// searching using BFS

//// Searching using BinSearch :

const getCoords = function (idx) {};
var searchMatrixBinSearch = function (matrix, target) {
  if (matrix.length === 0) {
    return false;
  }
  if (matrix[0].length === 0) {
    return false;
  }
  let rowsLength = matrix.length,
    columnLength = matrix[0].length;
  let start = 0,
    end = rowsLength * columnLength - 1;
  while (start <= end) {
    let mid = Math.floor((end + start) / 2);
    let row = Math.floor(mid / columnLength);
    let column = mid % columnLength;
    if (matrix[row][column] === target) {
      return true;
    } else if (matrix[row][column] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return false;
};

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
  //   let number = new Array(matrix[0].length)
  //     .fill(0)
  //     .map(() => new Array(matrix.length).fill(true));
  //   for (let row = 0; row < number.length; row++) {
  //     for (let column = 0; column < number[0].length; column++) {
  //       number[row][column] = matrix[column][row];
  //     }
  //   }
  if (matrix.length === 0) {
    return [];
  }
  let number = [];
  for (let row = 0; row < matrix[0].length; row++) {
    let newRow = [];
    for (let column = 0; column < matrix.length; column++) {
      newRow.push(matrix[column][row]);
      }
      number.push(newRow);
  }
  return number;
};

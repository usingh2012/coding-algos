/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
const INF = 2147483647;
const GATE = 0;
const WALL = -1;
const directions = [
  [-1, 0], //top
  [0, 1], //right
  [1, 0], //bottom
  [0, -1], //left
];
var wallsAndGates = function (rooms) {
  const toIterateQ = [];
  for (let row = 0; row < rooms.length; row++) {
    for (let column = 0; column < rooms[0].length; column++) {
      if (rooms[row][column] === GATE) {
        toIterateQ.push([row, column]);
      }
    }
  }
  let currentLevelLen = toIterateQ.length,
    distance = 1;
  while (toIterateQ.length) {
    if (currentLevelLen === 0) {
      currentLevelLen = toIterateQ.length;
      distance++;
    }
    let currentNode = toIterateQ.shift();
    currentLevelLen--;
    for (let direction of directions) {
      let newRow = currentNode[0] + direction[0];
      let newColumn = currentNode[1] + direction[1];
      if (
        newRow < 0 ||
        newColumn < 0 ||
        newRow >= rooms.length ||
        newColumn >= rooms[0].length ||
        rooms[newRow][newColumn] < INF ||
        rooms[newRow][newColumn] === GATE
      ) {
        continue;
      }
      rooms[newRow][newColumn] = distance;
      toIterateQ.push([newRow, newColumn]);
    }
  }
};

var wallsAndGatesDFS = function (rooms) {
    const toIterateQ = [];
 
  for (let row = 0; row < rooms.length; row++) {
    for (let column = 0; column < rooms[0].length; column++) {
      if (rooms[row][column] === GATE) {
        dfs(rooms, row, column, 0);
      }
    }
  }
};
function dfs(rooms, row, column, distance) {
    distance++;
    if (
        row < 0 ||
        column < 0 ||
        row >= rooms.length ||
        column >= rooms[0].length ||
        rooms[row][column] < distance ||
        rooms[row][column] === GATE
      ) {
        return;
      }
  for (let direction of directions) {
    let newRow = row + direction[0];
    let newColumn = column + direction[1];
    if (
      newRow < 0 ||
      newColumn < 0 ||
      newRow >= rooms.length ||
      newColumn >= rooms[0].length ||
      rooms[newRow][newColumn] < distance ||
      rooms[newRow][newColumn] === GATE
    ) {
      continue;
    }
    rooms[newRow][newColumn] = distance;
    dfs(rooms, newRow, newColumn, distance);
  }
}

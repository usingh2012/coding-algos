////////////////////////// First way DFS starts //////////////////////////////////////
const visited = {};
function twoDArrayDFS(array, row, column, values) {
  values.push(array[row][column]);

  visited[`${row}${column}`] = true;
  if (row > 0 && !visited[`${row - 1}${column}`]) {
    twoDArrayDFS(array, row - 1, column, values);
  } else if (
    column < array[row].length - 1 &&
    !visited[`${row}${column + 1}`]
  ) {
    twoDArrayDFS(array, row, column + 1, values);
  } else if (row < array.length - 1 && !visited[`${row + 1}${column}`]) {
    twoDArrayDFS(array, row + 1, column, values);
  } else if (column > 0 && !visited[`${row}${column - 1}`]) {
    twoDArrayDFS(array, row, column - 1, values);
  } else {
    return;
  }
}
////////////////////////// First way DFS ends //////////////////////////////////////

////////////////////////// Another way DFS starts //////////////////////////////////////
function twoDArrayDFSAnotherWay(array) {
  let visited = new Array(array.length)
    .fill(0)
    .map(() => new Array(array[0].length).fill(false));
  let values = [];
  dfsTraversal(array, 0, 0, visited, values);
  console.log(values);
}

const directions = [
  [-1, 0], //top
  [0, 1], //right
  [1, 0], //bottom
  [0, -1], //left
];
function dfsTraversal(array, row, column, visited, values) {
  if (
    row < 0 ||
    row >= array.length ||
    column >= array[0].length ||
    column < 0 ||
    visited[row][column]
  ) {
    return;
  }
  visited[row][column] = true;
  values.push(array[row][column]);
  
  for (let direction of directions) {
    let newRow = row + direction[0],
      newColumn = column + direction[1];
    
    dfsTraversal(
      array,
      newRow,
      newColumn,
      visited,
      values
    );
  }
}

////////////////////////// Another way DFS ends //////////////////////////////////////

////////////////////////// BFS starts //////////////////////////////////////
function twoDArrayBFS(array) {
  const directions = [
    [-1, 0], //top
    [0, 1], //right
    [1, 0], //bottom
    [0, -1], //left
  ];
  if (array.length === 0) {
    return;
  }
  let visited = new Array(array.length)
    .fill(0)
    .map(() => new Array(array[0].length).fill(false));
  let row = Math.floor(array.length / 2),
    column = Math.floor(array[0].length / 2),
    values = [],
    iterativeQ = [{ row: row, column: column }];
  while (iterativeQ.length) {
    let currentNode = iterativeQ.shift();
    row = currentNode.row;
    column = currentNode.column;

    if (
      row < 0 ||
      row >= array.length ||
      column < 0 ||
      column >= array[0].length ||
      visited[row][column]
    ) {
      continue;
    }
    values.push(array[row][column]);
    visited[row][column] = true;
    for (let direction of directions) {      
      iterativeQ.push({
        row: row + direction[0],
        column: column + direction[1],
      });
    }
  }
  console.log(values);
  return values;
}

////////////////////////// BFS ends //////////////////////////////////////
let valArr = [];
let arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
// twoDArrayDFS(arr, 0, 0, valArr);
// console.log(valArr);

twoDArrayDFSAnotherWay(arr);
twoDArrayBFS(arr);

/**
 * @param {number[][]} grid
 * @return {number}
 */
const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  var orangesRotting = function (grid) {
    const visited = new Array(grid.length)
      .fill(0)
      .map(() => new Array(grid[0].length).fill(false));
    const rottenOranges = []; let freshOranges = 0;
    for (let row = 0; row < grid.length; row++) {
      console.log(grid.length);
      for (let column = 0; column < grid[0].length; column++) {
        if (grid[row][column] === 2) {
          rottenOranges.push([row, column]);
      
        }
        if (grid[row][column] === 1) {                
          freshOranges++;
        }
       
      }
    }
    if(freshOranges === 0){
        return 0;
    }
    if (!rottenOranges.length) {
      return -1;
    }
  
  
    let traverseQ = rottenOranges,
      mins = 0;
  
    while (traverseQ.length) {
      let counter = 0,
      anyFresh= false,
        lengthOftraverseQ = traverseQ.length;
      while (counter < lengthOftraverseQ) {
        counter++;
        let currentNode = traverseQ.shift();
        let row = currentNode[0],
          column = currentNode[1];
        if (
          row < 0 ||
          row >= grid.length ||
          column < 0 ||
          column >= grid[0].length ||
          visited[row][column] ||
          grid[row][column === 0]
        ) {
          continue;
        }else{
            anyFresh =true;
        }
        visited[row][column] = true;
        if(  grid[row][column] === 1){
            grid[row][column] = 2;
            freshOranges--;
        }
        if(freshOranges === 0){
            return mins;
        }
        
        for (let direction of directions) {
          let newRow = row + direction[0];
          let newColumn = column + direction[1];
          if (
            newRow < 0 ||
            newRow >= grid.length ||
            newColumn < 0 ||
            newColumn >= grid[0].length ||
            visited[newRow][newColumn] ||
            grid[newRow][newColumn] === 0
          ) {
            continue;
          } else {
            traverseQ.push([newRow, newColumn]);
          }
        }
      }
      if(anyFresh){
          mins++;
      }
      
    }
  
   if(freshOranges > 0){
       return -1;
   }else{
  return mins-1;
   }
    
  };
  
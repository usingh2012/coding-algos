//https://leetcode.com/problems/knight-probability-in-chessboard/

/**
 * @param {number} n
 * @param {number} k
 * @param {number} row
 * @param {number} column
 * @return {number}
 */
var knightProbability = function (n, k, row, column) {
  const probs = new Array(n)
    .fill(0)
    .map(() => new Array(n))
    .fill(-1);

  let movements = [
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
  ];

  let nextLevelProcess = [[row, column]];
  let finalProb = 0;
  for (let i = 1; i <= k; i++) {
    let toProcess = [...nextLevelProcess];

    while (toProcess.length) {
      nextLevelProcess = [];
      let count = 0;
      let [currentRow, currentColumn] = toProcess.pop();
      if (probs[currentRow][currentColumn] !== -1) {
        if (i === k) {
          finalProb =
            finalProb + probs[currentRow][currentColumn] / Math.pow(8, k);
        }
        continue;
      }
      for (let movement of movements) {
        let newRow = currentRow + movement[0];
        let newColumn = currentColumn + movement[1];
        if (newRow < 0 || newRow >= n) {
          continue;
        }
        if (newColumn < 0 || newColumn >= n) {
          continue;
        }
        nextLevelProcess.push([newRow, newColumn]);
        count++;
      }
      let currentProbability = count / 8;
      probs[currentRow][currentColumn] = currentProbability;
      if (i === k) {
        finalProb =
          finalProb + probs[currentRow][currentColumn] / Math.pow(8, k);
      }
    }
  }
  return finalProb;
};

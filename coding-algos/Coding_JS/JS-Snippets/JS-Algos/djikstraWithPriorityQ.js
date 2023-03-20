// // You are given a network of n nodes, labeled from 1 to n.
// // You are also given times, a list of travel times as
// directed edges times[i] = (ui, vi, wi),
// where ui is the source node,
//     vi is the target node, and
//     wi is the time it takes for a signal to travel from source to target.

//Input: times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2
// Output: 2
import PriorityQueue from "../JS-DS Implementation/PriorityQueue-Impl";

var networkDelayTime = function (times, n, k) {
  k--;
  let distance = new Array(n).fill(Infinity);
  let adjacencyList = new Array(n).fill(0).map(() => []);
  for (let i = 0; i < times.length; i++) {
    let currentEdge = times[i];
    let source = currentEdge[0] - 1;
    let target = currentEdge[1] - 1;
    adjacencyList[source].push([target, currentEdge[2]]);
  }
  distance[k] = 0;
  let toProcess = [k];
  let seen = [];
  console.log(adjacencyList);
  console.log(distance);
  while (toProcess.length) {
    let currentNode = toProcess.pop();
    seen[currentNode] = true;
    let edgesFromCurrentNode = adjacencyList[currentNode];

    for (let j = 0; j < edgesFromCurrentNode.length; j++) {
      let target = edgesFromCurrentNode[j][0];
      let distanceFromSource = edgesFromCurrentNode[j][1];
      let newDistance = distance[currentNode] + distanceFromSource;
      if (newDistance < distance[target]) {
        distance[target] = newDistance;
      }
    }

    let min = Infinity,
      minIndex = -1;
    for (let k = 0; k < distance.length; k++) {
      if (seen[k]) {
        continue;
      }
      if (distance[k] < min) {
        min = distance[k];
        minIndex = k;
      }
    }
    if (minIndex > -1) {
      toProcess.push(minIndex);
    }
  }
  let maxDistance = Math.max(...distance);
  if (maxDistance === Infinity) {
    return -1;
  } else {
    return maxDistance;
  }
};

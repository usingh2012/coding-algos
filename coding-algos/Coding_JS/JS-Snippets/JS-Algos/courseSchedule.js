//https://leetcode.com/problems/course-schedule/
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 * This is a graph question and it is only applicable for directed graph.
 * To solve use topological sort algorightm.
 * Algo -
 * 1. First built adjacency list from prerequisites. prerequisites is array of array.
 * Each item of prereq [0,1] is a pair which means to do cource 0 you have to do course 1. So its a directed graph
 * from 1 to 0(right to left).
 * 2. Build inbound array which is number of incoming connection for any given index/vertex.
 * 3. Loop number of vertex times. On each loop find any vertex-say currentZeroVertex
 * where incoming connection is zero and remove it.
 * If no vertex with zero incoming connection is found then it means cycle is present.
 * 4. To remove any vertex find currentZeroVertex in adjacencyList.
 * The array it points to is the list of its outgoing connections.
 * 5. Decrement each element of the array where it points to.
 * Save currentZeroVertex in a seen object so as to skip it from processing in the next loop
 * 6. Loop again.
 * 7. Return true at the end of the loop.
 *
 */
var canFinish = function (numCourses, prerequisites) {
  if (prerequisites.length < 2) {
    return true;
  }
  let adjList = new Array(numCourses).fill(0).map(() => []);
  let inBound = new Array(numCourses).fill(0);
  for (let prereq of prerequisites) {
    let index = prereq[1],
      value = prereq[0];
    adjList[index].push(value);
    inBound[value]++;
  }
  let seen = {},
    count = 0;
  while (count < numCourses) {
    let toProcessVertex = -1;
    count++;
    for (let i = 0; i < inBound.length; i++) {
      if (seen[i]) {
        continue;
      } else {
        if (inBound[i] === 0) {
          toProcessVertex = i;
          seen[i] = true;
          break;
        }
      }
    }
    if (toProcessVertex === -1) {
      return false;
    } // means all vertex have inbound relations and cycle is present
    let outGoingVertexes = adjList[toProcessVertex];
    for (let outGoingVertex of outGoingVertexes) {
      inBound[outGoingVertex]--;
    }
  }
  return true;
};

var canFinishOptimal = function (numCourses, prerequisites) {
  if (prerequisites.length < 2) {
    return true;
  }
  let adjList = new Array(numCourses).fill(0).map(() => []);
  let inBound = new Array(numCourses).fill(0);
  for (let prereq of prerequisites) {
    let index = prereq[1],
      value = prereq[0];
    adjList[index].push(value);
    inBound[value]++;
  }
  let processStack = [];
  for (let i = 0; i < inBound.length; i++) {
    if (inBound[i] === 0) {
      processStack.push(i);
    }
  }
    let count = 0;
    
  while (processStack.length) {
    let current = processStack.pop();
    count++;
    let outGoing = adjList[current];
    for (let i = 0; i < outGoing.length; i++) {
      let currentVertex = outGoing[i];
      inBound[currentVertex]--;
        if (inBound[currentVertex] === 0) {
          //Why already processed item will not be pushed to processStack again in the below step?
    //Because if any node is present in outgoing array means it has some incoming connection. 
    //Already processed items had 0 incoming connections. Hence such nodes will never be reappear.
    //ANother explanation is even if it appears its value will become -1 and not 0 coz it already was zero.
        processStack.push(outGoing[i]);
      }
    }
  }
  return count === numCourses;
};

// Below solution can also work but its not optimal
//var canFinish = function (numCourses, prerequisites) {
//     if(prerequisites.length < 2){
//         return true;
//     }
//       let adjList = new Array(numCourses).fill(0).map(() => []);
//     let incomingConnectionsList = new Array(numCourses).fill(0).map(() => []);
//     for (let prereq of prerequisites) {
//         let index = prereq[1], value = prereq[0];
//         adjList[index].push(value);
//         incomingConnectionsList[value].push(index);
//     }
//     let seen = {};
//     while (true) {
//         let emptyVertex = -1, allEmpty = true;
//         for (let i = 0; i < incomingConnectionsList.length; i++) {
//              if (incomingConnectionsList[i].length > 0) {
//                 allEmpty = false;
//             }
//             if (incomingConnectionsList[i].length === 0) {
//                 if(seen[i]){
//                     continue;
//                 }
//                 emptyVertex = i;
//                 seen[i] = true
//                 break;
//             }
//         }
//         if (emptyVertex === -1) {
//             return false;
//         }
//         if(allEmpty){
//             return true;
//         }
//        let toRemoveFrom = adjList[emptyVertex];
//         for (let i = 0; i < toRemoveFrom.length; i++) {
//             let incomingConnectionsToRemoveFrom = incomingConnectionsList[toRemoveFrom[i]];
//             let indexToRemove = incomingConnectionsToRemoveFrom.indexOf(emptyVertex);
//             if (indexToRemove > -1) {
//                 incomingConnectionsToRemoveFrom.splice(indexToRemove, 1);
//             }
//         }
//     }
// };

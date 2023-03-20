//https://leetcode.com/problems/longest-cycle-in-a-graph/

/**
 * @param {number[]} edges
 * @return {number}
 */
const longestCycle = function (edges) {
  let cycleLen = 0, savedResult = {};
     for (let i = 0; i < edges.length; i++){
         let endNode = i, currentCycleLen = 0;
         let tempSavedResult = {};
         while (currentCycleLen < edges.length) {
            
             if (savedResult[endNode]) {
                 break;
             }
             tempSavedResult[endNode] = true;
             endNode = edges[endNode]; 
             if (endNode === -1) {               
                 break;
             }
             currentCycleLen++;          
             if (endNode === i) {
                 savedResult = { ...savedResult, ...tempSavedResult };
                 cycleLen = Math.max(currentCycleLen, cycleLen);
                 break;
             }
            
         }
     }
     if (cycleLen === 0) {
         cycleLen = -1
     }
     console.log('Max cycle length = ' + cycleLen);
};

longestCycle([3,3,4,2,3])
longestCycle([2, -1, 3, 1])


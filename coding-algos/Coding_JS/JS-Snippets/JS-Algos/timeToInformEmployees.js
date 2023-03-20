//https://leetcode.com/problems/time-needed-to-inform-all-employees/

/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 * 
 * This is similar to getting the max depth from n-ary trees. 
 * From one level to another the depth is defined in the informTime array.
 */
var numOfMinutes = function (n, headID, manager, informTime) {
    let managerGraph = {};
    for (let i = 0; i < manager.length; i++){
        if (typeof managerGraph[manager[i]] === 'undefined') {
            managerGraph[manager[i]] = [i];
        } else {
            managerGraph[manager[i]].push(i);
        }
    }
    let maxTime = timeTaken(headID, managerGraph, informTime, 0)
    return maxTime;
};
const timeTaken = (nodeId, managerGraph, informTime, maxTimeTaken) => { 
    if (typeof managerGraph[nodeId] === 'undefined') {
        return maxTimeTaken;
    }
    let employees = managerGraph[nodeId], maxTimeForThisLevel = 0;
    maxTimeTaken = maxTimeTaken + informTime[nodeId];
    for (let employee of employees) {
        maxTimeForThisLevel = Math.max(maxTimeForThisLevel, timeTaken(employee, managerGraph, informTime, maxTimeTaken));
    }
    return maxTimeForThisLevel;
}
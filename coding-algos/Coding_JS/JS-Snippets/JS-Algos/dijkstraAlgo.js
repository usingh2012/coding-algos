//https://leetcode.com/problems/network-delay-time/

/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {
    if (n < 2) {
        return 0;
    }
    let processNodes = new Array(n).fill(Infinity),
        adjList = new Array(n).fill(0).map(() => []);
    processNodes[k] = 0;
    for (let time of times) {
        let [source, target, timeTaken] = time;
        source--;
        target--;
        adjList[source].push({ targetId: target, timeTaken: timeTaken });
    }
    let seen = {}, toProcess = [k];
    while (toProcess.length) {
        let current = toProcess.pop();
        seen[current] = true;
        for (let i = 0; i < adjList[current].length; i++) {
            let connection = adjList[current][i];
            let targetId = connection.targetId, timeTaken = connection.timeTaken;
            if (processNodes[targetId] > timeTaken) {
                processNodes[targetId] = timeTaken;
            }
        }
        let min = Infinity, index = -1;
        for (let i = 0; i < processNodes.length; i++){
            if (seen[i]) {
                continue;
            }
            if (min > processNodes[i]) {
                min = processNodes[i];
                index = i;
            }
        }
        if (index > -1) {
            toProcess.push(index);
        }
    }
    let max = 0;
    for (let i = 0; i < processNodes.length; i++){        
        if (max < processNodes[i]) {
            max = processNodes[i];            
        }
    }
    if (max === Infinity) {
        return -1;
    }
    return max;
};
//https://leetcode.com/problems/network-delay-time/

/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {
    let timeTaken = new Array(n).fill(Infinity);
    k--;
    timeTaken[k] = 0;
    for (let i = 0; i < n - 1; i++){
        let count = 0; //for optimization
        for (let j = 0; j < times.length; j++){
            let [source, target, time] = times[j];
            source--;
            target--;
            let newTimeTaken = timeTaken[source] + time;
            if (timeTaken[target] > newTimeTaken) {
                timeTaken[target] = newTimeTaken;
                count++;
            }
        }
        if (count === 0) {
            break;
        }//means no values got updated hence no point in running it again
    }//bellman ford has to be run n-1 times
    let max = Math.max(...timeTaken);
    if (max === Infinity) {
        return -1;
    } else {
        return max;
    }
}
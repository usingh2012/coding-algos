/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let result = [], start = null, end = null;
    for (let interval of intervals) {
        if (interval.length) {
            if (start === null) {
                start = interval[0];
            }
            if (end === null) {
                end = interval[1];
            }
            if (end >= interval[0]) {
                end = Math.max(end, interval[1]);
            } else {
                result.push([start, end]);
                start = interval[0];
                end = interval[1];
            }
        }
    }
    if (start !== null) {
        result.push([start, end]);
    }
    return result;
};
/**https://leetcode.com/problems/insert-interval/
 * Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10]
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  let start = null,
    end = null,
    result = [];

  for (let i = 0; i < intervals.length; i++) {
    let currentInterval = intervals[i];
    if (newInterval[0] <= currentInterval[0]) {
        intervals.splice(i, 0, newInterval);
        break;
      }
      if (i === intervals.length - 1) {
          intervals.push(newInterval);
          break;
      }
  }

  for (let i = 0; i < intervals.length; i++)
  {
    let currentInterval = intervals[i];
    if (start === null) {
      start = currentInterval[0];
      end = currentInterval[1];
    } else {
      if (end >= currentInterval[0]) {
        end = Math.max(end, currentInterval[1]);
      } else {
        result.push([start, end]);
        start = currentInterval[0];
        end = currentInterval[1];
      }
    }
    }
    result.push([start, end]);
    return result;
};

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert2 = function(intervals, newInterval) {
    const result = [];
    
    for (let i = 0; i < intervals.length; i++) {
        let interval = intervals[i];
        
        // If overlaps
        if (Math.max(interval[0], newInterval[0]) <= Math.min(interval[1], newInterval[1])) {
            newInterval = [Math.min(interval[0], newInterval[0]), Math.max(interval[1], newInterval[1])];
            continue;
        }
        
        // If lower
        if (interval[0] > newInterval[1]) {
            result.push(newInterval, ...intervals.slice(i));
            return result;
        }
        
        result.push(interval);
    }
    
    result.push(newInterval);
    return result;
};

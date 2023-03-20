/**
 * https://leetcode.com/problems/meeting-rooms-ii/
 * @param {number[][]} intervals
 * @return {number}
 * Algo:
 * Sort the intervals based on the start time
 * Use a minpriorityQ to store values of end times of interval
 * If start of any interval is less than front of minPriorityQ
 * then a new room is required
 * else remove the front
 * Keep adding the end time of the interval to the queue.
 */
var minMeetingRooms = function (intervals) {
  let minPriorityQ = new MinPriorityQueue();
  let numberOfMeetingRooms = 0;
  let t;
  intervals.sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < intervals.length; i++) {
    let currentInterval = intervals[i];
    if (numberOfMeetingRooms === 0) {
      numberOfMeetingRooms++;
      minPriorityQ.enqueue(intervals[i][1]);
    } else {
      console.log(minPriorityQ.front());
      if (currentInterval[0] < minPriorityQ.front().element) {
        numberOfMeetingRooms++;
      } else {
        minPriorityQ.dequeue();
      }
      minPriorityQ.enqueue(currentInterval[1]);
    }
  }
  return numberOfMeetingRooms;
};

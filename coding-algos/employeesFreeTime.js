function employeeFreeTime(schedule) {
  // schedule = [ [ [ 3, 5]], [[4,6]] ]
  let i = 0,
    workStart = Infinity,
    workEnd = -Infinity,
    previousWorkEnd;
  let j = 0;
  let maxLenOfSchedule = 1,
    result = [];
  while (i < maxLenOfSchedule) {
    let j = 0;
    while (j < schedule.length) {
      maxLenOfSchedule = Math.max(maxLenOfSchedule, schedule[j].length);
      if (i < schedule[j].length) {
        workStart = Math.min(workStart, schedule[j][i][0]);
        workEnd = Math.max(workEnd, schedule[j][i][1]);
      }
      if (j === schedule.length - 1) {
        if (i === 0) {
          if (workStart > 1) {
            result.push([1, workStart]);
          }
        } else {
          if (workStart > previousWorkEnd) {
            result.push([previousWorkEnd, workStart]);
          }
        }
        previousWorkEnd = workEnd;
      }
      j++;
    }
    i++;
  }
  return result;
}

/**
 * // Definition for an Interval.
 * function Interval(start, end) {
 *    this.start = start;
 *    this.end = end;
 * };
 */

/**
 * @param {Interval[][]} schedule
 * @return {Interval[]}
 * To solve first put all the time intervals of all the employees in one array,
 * then sort that array
 * then traverse the array and check if max end of previous intervals is lesser than current interval starting point,
 * if yes then thats a free time.
 */
function employeeFreeTimeUsingIntervals(schedule) {
  let allIntervals = schedule.flat();
  allIntervals.sort(
    (interval1, interval2) => interval1.start - interval2.start
  );
  let freeTime = [],
    end,
    start;
  for (let i = 0; i < allIntervals.length; i++) {
    let currentInterval = allIntervals[i];
    start = currentInterval.start;
    if (end === undefined) {
      end = currentInterval.end;
    } else {
      if (end < start) {
        freeTime.push({ start: end, end: start });
      }
      end = Math.max(end, currentInterval.end);
    }
  }
  console.log(freeTime);
  return freeTime;
}

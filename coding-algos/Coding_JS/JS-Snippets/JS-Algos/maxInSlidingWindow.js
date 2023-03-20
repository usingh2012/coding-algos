//https://leetcode.com/problems/sliding-window-maximum/

/**
 * TO solve, use a deque which is two end queue,
 * It has 0(1) timecomplexity for pop and push and shift operation.'
 * Deque will maintain an array of indexes which are max in the current window
 * If any new item comes into the window which is max than anything else
 * then it will pop everything else and set itself on top of the deque.
 * This is the key point of solving this.. 
 * Any new value which is max than others previous values, 
 * then remove the other previous values as they will never be used since max is there.
 * 
 * 
 * @param {} nums 
 * @param {*} k 
 */
var maxSlidingWindow = function (nums, k) {
    let deque = [], result = [];
    for (let i = 0; i < nums.length; i++){
        let currentVal = nums[i];
        //Pop deque till the current item is larger than the deque items
        while (deque.length) {
            let lastItem = deque[deque.length - 1];
            if (currentVal >= nums[lastItem]) {// All these indexes will never become max as already a max with higher index is added
                deque.pop();
            } else {
                break;
            }
        }
  
        let lowerLimitOfWindow = i - k + 1;
        if (deque[0] < lowerLimitOfWindow) {
            deque.shift();
        }
        deque.push(i);
        if (i >= k - 1) {
            result.push(deque[0]);
        }   
    }
}
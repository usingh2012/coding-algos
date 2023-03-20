/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * Algo:
 * 1. Check whether K nodes exist from the start node.
 * 2. If yes then reverse the K nodes. If prevStart is null assign the head to prev.
 *    Connect prevStart with previous node
 *    Assign start to current and prevStart to start
 * 3. If no then connect prevStart (if prevStart exist) to start and return the head.
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  if (k === 0) {
    return head;
  }
  if (!head || head.next === null) {
    return head;
  }
  let current = head,
    start = head,
    prevStart = null;
  while (current !== null) {
    //Check if k nodes exist
    let count = 0,
      itr = start;
    let kCountNodeExist = false;
    while (count < k && itr !== null) {
      itr = itr.next;
      count++;
      if (count === k) {
        kCountNodeExist = true;
      }
    }
    if (kCountNodeExist) {
      //reverse the count nodes
      count = 0;
      let prev = null,
        next = current;
      while (count < k) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
        count++;
      }
      if (prevStart !== null) {
        prevStart.next = prev;
      } else {
        head = prev;
      }
      prevStart = start;
      start = current;
    } else {
      if (prevStart !== null) {
        prevStart.next = start;
      }
      break;
    }
  }
  return head;
};

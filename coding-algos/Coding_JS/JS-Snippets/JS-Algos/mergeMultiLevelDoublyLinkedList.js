/**
 * https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/submissions/
 To do this we have used the top down approach for merging. 
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function (head) {
    let iteratorNode = head;
  while (iteratorNode !== null) {
      if (iteratorNode.child) {
          let childIterator = iteratorNode.child,
              iteratorNodeNext = iteratorNode.next;
          while (childIterator.next !== null) {
              childIterator = childIterator.next;
          }
          iteratorNode.next = iteratorNode.child;
          iteratorNode.child.prev = iteratorNode;
          if (iteratorNodeNext) {
              childIterator.next = iteratorNodeNext;
              iteratorNodeNext.prev = childIterator;
          }
          iteratorNode.child = null;     
      } 
      iteratorNode = iteratorNode.next;
  }
  return head;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}
// ---- Generate our linked list ----
const linkedList = [5, 4, 3, 2, 1].reduce(
  (acc, val) => new ListNode(val, acc),
  null
);

const printList = (head) => {
  if (!head) {
    return;
  }

  console.log(head.val);
  printList(head.next);
};

const reverseBetween = function (head, left, right) {
  if (left === right) {
    return head;
  }
  let current = head,
    position = 1,
    beforeLeft = null,
    afterRight = null,
    leftNode = null,
    rightNode = null,
    prev = null;
  while (current && position <= right) {
    let nextNode = current.next;
    if (position === left - 1) {
      beforeLeft = current;
    }
    if (position === left) {
      leftNode = current;
    }
    if (position > left && position <= right) {
      if (position === right) {
        afterRight = nextNode;
        rightNode = current;
      }
      current.next = prev;
      //reverse list
    }
    position++;
    prev = current;
    current = nextNode;
  }
  beforeLeft.next = rightNode;
  leftNode.next = afterRight;
  if (left > 1) {
    return head;
  } else {
    return rightNode;
  }
};

printList(linkedList);
reverseBetween(linkedList, 2, 4);
printList(linkedList);
F;

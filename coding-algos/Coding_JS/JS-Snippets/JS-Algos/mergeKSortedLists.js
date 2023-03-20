/*//https://leetcode.com/problems/merge-k-sorted-lists/*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
//// Approach 1 - Compare head of every list //////
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  let toIterate = null,
    result = null;
  let totalItems = this.getTotalItems(lists),
    count = 0;
  while (count < totalItems) {
    let smallestNodeIndex = this.getSmallestIndex(lists);
    let smallestNode = lists[smallestNodeIndex];
    if (result === null) {
      result = smallestNode;
      toIterate = result;
    } else {
      toIterate.next = smallestNode;
    }
    lists[smallestNodeIndex] = smallestNode.next;
    toIterate = toIterate.next;
  }
  return result;
};

var getSmallestIndex = function (lists) {
  let min = -1;
  for (let i = 0; i < lists.length; i++) {
    if (min === -1) {
      min = i;
      continue;
    }
    if (lists[i] === null) {
      continue;
    }
    if (lists[i] < lists[min]) {
      min = i;
    }
  }
  return min;
};
var getTotalItems = function (lists) {
  let count = 0,
    current = null;
  for (let i = 0; i < lists.length; i++) {
    let current = lists[i];
    while (current !== null) {
      count++;
      current = current.next;
    }
  }
  return count;
};
/**    Approach 1 done */

// Divide and conquer //

var mergeKLists = function (lists) {
  let listsLen = lists.length;
  while (listsLen) {
    listsLen--;
    lists[0] = merge(lists[0], lists[1]);
    lists.splice(1, 1);
  }
  return lists;
};

const merge = (list1, list2) => {
  let mergedListHead = null,
    iterator = null;
  if (!list1) {
    return list2;
  }
  if (!list2) {
    return list1;
  }
  if (list1.val < list2.val) {
    mergedListHead = list1;
    list1 = list1.next;
  } else {
    mergedListHead = list2;
    list2 = list2.next;
  }
  iterator = mergedListHead;
  while (list1 && list2) {
    if (list1.val < list2.val) {
      iterator.next = list1;
      list1 = list1.next;
    } else {
      iterator.next = list2;
      list2 = list2.next;
    }
    iterator = iterator.next;
  }

  if (!list1 && list2) {
    iterator.next = list2;
  }
  if (!list2 && list1) {
    iterator.next = list1;
  }

  return mergedListHead;
};

const merge2 = (list1, list2) => {
  let mergedListHead = new ListNode(-1); // fake node created for better traversal.
  iterator = mergedListHead;
  while (list1 && list2) {
    if (list1.val < list2.val) {
      iterator.next = list1;
      list1 = list1.next;
    } else {
      iterator.next = list2;
      list2 = list2.next;
    }
    iterator = iterator.next;
  }

  if (!list1 && list2) {
    iterator.next = list2;
  }
  if (!list2 && list1) {
    iterator.next = list1;
  }

  return mergedListHead.next;
};

/////////////// Divide and Conquer done //////////////////

// Using Priority queue //////////////
class PriorityQueue1 {
  constructor(
    comparator = (a, b) => {
      a > b;
    }
  ) {
    this._comparator = comparator;
    this._heap = [];
  }
  size() {
    return this._heap.length;
  }
  isEmpty() {
    return this._heap.length === 0;
  }
  peek() {
    return this._heap[0];
  }
  enqueue(newNode) {
    this._heap.push(newNode);
    this._shiftUp();
  }
  dequeue() {
    this._heap[0] = this._heap[this._heap.length - 1];
    this._heap.pop();
    this._shiftDown();
  }
  _getParent(idx) {
    return Math.floor((idx - 1) / 2);
  }
  _getLeftChild(idx) {
    return idx * 2 + 1;
  }
  _getRightChild(idx) {
    return idx * 2 + 2;
  }
  _shiftUp() {
    let nodeIdx = this.size() - 1;
    while (nodeIdx > 0 && this._compare(nodeIdx, this._getParent(nodeIdx))) {
      this._swap(nodeIdx, this._getParent(nodeIdx));
      nodeIdx = this._getParent(nodeIdx);
    }
  }
  _compare(idx1, idx2) {
    return this._comparator(this._heap[idx1], this._heap[idx2]);
  }
  _swap(idx1, idx2) {
    let temp = this._heap[idx1];
    this._heap[idx1] = this._heap[idx2];
    this._heap[idx2] = temp;
  }
  _shiftDown() {
    let nodeIdx = 0;
    //if no left child then no child as it is a complete binary tree.
    //If no child then nothing is there to swap the current node with.
    while (this._getLeftChild(nodeIdx) < this.size()) {
      let leftChild = this._getLeftChild(nodeIdx),
        rightChild = this._getRightChild(nodeIdx),
        greaterChild = null;
      if (leftChild < this.size()) {
        if (rightChild < this.size()) {
          greaterChild = this._compare(leftChild, rightChild)
            ? leftChild
            : rightChild;
        } else {
          greaterChild = leftChild;
        }
        if (this._compare(greaterChild, nodeIdx)) {
          this._swap(greaterChild, nodeIdx);
          nodeIdx = greaterChild;
        }
      } else {
        return;
      }
    }
  }
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
// Priority Queue approach 1 - using inbuilt queue
var mergeKLists = function (lists) {
  const processQ = new MinPriorityQueue({
    priority: (node) => {
      return node.val;
    },
  });

  for (let i = 0; i < lists.length; i++) {
    if (lists[i]) {
      processQ.enqueue(lists[i]);
    }
  }
  let head = null,
    current = null;
  while (!processQ.isEmpty()) {
    let smallestNode = processQ.dequeue().element;
    if (head === null) {
      head = smallestNode;
      current = head;
    } else {
      //  if(current){
      current.next = smallestNode;
      current = current.next;
      //}
    }

    if (smallestNode.next) {
      processQ.enqueue(smallestNode.next);
    }
  }
  return head;
};

class PriorityQueue {
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
    let toRemove = this._heap[0];
    this._heap[0] = this._heap[this._heap.length - 1];
    this._heap.pop();
    this._shiftDown();
    return toRemove;
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
export default PriorityQueue;

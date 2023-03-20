// // //Array begins
// // class MyArray {
// //   constructor() {
// //     this.length = 0;
// //     this.data = {};
// //   }
// //   push(item) {
// //     this.data[this.length] = item;
// //     this.length++;
// //   }
// //   get(index) {
// //     return this.data[index];
// //   }
// // }

// // // const myarr = new MyArray();
// // // myarr.push('hi');
// // // console.log(myarr);
// // //Array ends

// // // Hashtable begins //
// // class HashTable {
// //   constructor(size) {
// //     this.data = new Array(size);
// //   }

// //   _hash(key) {
// //     let hash = 0;
// //     for (let i = 0; i < key.length; i++) {
// //       hash = (hash + key.charCodeAt(i) * i) % this.data.length
// //     }
// //     console.log(`the hash for key ${key} is ${hash}`)
// //     return hash;
// //   }//this is inbuilt in all the languages and is very fast.. So timecomplexity for this is o(1)

// //   set(key, value) {
// //     let location = this._hash(key);
// //     if (typeof this.data[location] === 'undefined') {
// //       this.data[location] = [];
// //     }
// //     this.data[location].push([key, value]);
// //     console.log(this.data);
// //   }

// //   get(key) {
// //     let location = this._hash(key);
// //     const valueBlock = this.data[location];
// //     if (valueBlock) {
// //       for (let i = 0; i < valueBlock.length; i++) {
// //         if (valueBlock[i][0] === key) {
// //           return valueBlock[i][1];
// //         }
// //       }
// //     }

// //   }

// //   keys() {
// //     const keysArr = [];
// //     for (let i = 0; i < this.data.length; i++) {
// //       if (this.data[i]) {
// //         let currentBlock = this.data[i];
// //         for (let j = 0; j < currentBlock.length; j++) {
// //           keysArr.push(currentBlock[j][0]);
// //         }
// //       }
// //     }
// //     return keysArr;
// //   }

// //   values() {
// //     const valuesArr = [];
// //     for (let i = 0; i < this.data.length; i++) {
// //       if (this.data[i]) {
// //         let currentBlock = this.data[i];
// //         for (let j = 0; j < currentBlock.length; j++) {
// //           valuesArr.push(currentBlock[j][1]);
// //         }
// //       }
// //     }
// //     return valuesArr;
// //   }
// // }

// // // const myHashTable = new HashTable(2);
// // // myHashTable.set('grapes', 10000)
// // // console.log(myHashTable.get('grapes'));
// // // myHashTable.set('apples', 9)
// // // myHashTable.set('oranges', 2)
// // // myHashTable.set('mango', 3)
// // // console.log(myHashTable.get('apples'));
// // // console.log(myHashTable.keys());
// // // console.log(`The values are : ${myHashTable.values()}`);
// // //HashTable ends//


// // // Linked List begins 
// // //10 -> 15 -> 12

class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class MyLinkedList {
    constructor(initValue) {
      this.head = {
        value: initValue,
        next: null
      };
      this.tail = this.head;
      this.length = 1;
    }
  
    append(value) {
      let node = {
        value: value,
        next: null
      }
      this.tail.next = node;
      this.tail = node;
      this.length++;
      return this.printList();
    }
  
    prepend(value) {
      let node = {
        value: value,
        next: null
      }
      node.next = this.head;
      this.head = node;
      this.length++;
      return this.printList();
    }
  
    insert(value, index) {
      if (index >= this.length) {
        return this.append(value);
      }
      if (index === 0) {
        return this.prepend(value);
      }
  
      let prevNode = this.getNthNode(index - 1),
        nextNode = prevNode.next,
        newNode = {
          value: value,
          next: null
        };
      newNode.next = nextNode;
      prevNode.next = newNode;
      this.length++;
      return this.printList();
  
    }
  
    delete(index) {
      if (index >= this.length || this.length <= 1) {
        console.log('not possible to delete');
        return this;
      }
      if (index === 0) {
        let firstNode = this.head;
        this.head = firstNode.next;
        firstNode = null;
        this.length--;
        return this.printList();
      }
  
  
      let prev = this.getNthNode(index - 1),
        current = prev.next,
        next = current.next;
      prev.next = next;
      current.next = null;
      this.length--;
      return this.printList();
    }
  
    getNthNode(index) {
      if (index < 0 || index >= this.length) {
        console.log('bad value of index');
        return;
      }
      let current = this.head,
        count = 0;
      while (count !== index) {
        current = current.next;
        count++;
      }
      return current;
    }
  
    printList() {
      let current = this.head;
      let values = [];
      while (current !== null) {
        values.push(current.value);
        current = current.next;
      }
      console.log(values.join(' --> '));
    }
  
    reverseList() {
      if (this.length === 1) {
        this.printList();
        return;
      }
      this.tail = this.head;
  
      let prev = this.head,
        current = this.head.next;
      while (current !== null) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
      }
  
      this.head = prev;
  
      this.tail.next = null;
  
      console.log('After reversing the list');
      this.printList();
      return this;
    }
  }
  
  // let myList = new MyLinkedList(10);
  // myList.append(15);
  // myList.append(12);
  // myList.prepend(8);
  // myList.insert(4, 1);
  // myList.delete(0);
  // myList.reverseList();
  // myList.delete(1);
  // myList.delete(2);
  // myList.delete(0);
  //console.log(myList);
  // // // // Linked List Ends
  
  // // // Doubly Linked List Starts
  
  // // class DoubleNode {
  // //   constructor(value) {
  // //     this.value = value;
  // //     this.next = null;
  // //     this.prev = null;
  // //   }
  // // }
  
  // // class MyDoubleLinkedList {
  // //   constructor(initValue) {
  // //     this.head = new DoubleNode(initValue);
  // //     this.tail = this.head;
  // //     this.length = 1;
  // //   }
  
  // //   append(value) {
  // //     let node = new DoubleNode(value);
  // //     this.tail.next = node;
  // //     node.prev = this.tail;
  // //     this.tail = node;
  // //     this.length++;
  // //     this.printList();
  // //     //  this.printListReverse();
  // //     return this;
  // //   }
  
  // //   prepend(value) {
  // //     let node = new DoubleNode(value);
  // //     node.next = this.head;
  // //     node.prev = null;
  // //     this.head.prev = node;
  // //     this.head = node;
  // //     this.length++;
  // //     this.printList();
  // //     // this.printListReverse();
  // //     return this;
  // //   }
  
  // //   insert(value, index) {
  // //     if (index >= this.length) {
  // //       return this.append(value);
  // //     }
  // //     if (index === 0) {
  // //       return this.prepend(value);
  // //     }
  
  // //     let prevNode = this.getNthNode(index - 1),
  // //       nextNode = prevNode.next,
  // //       newNode = new DoubleNode(value);
  // //     newNode.next = nextNode;
  // //     prevNode.next = newNode;
  // //     nextNode.prev = newNode;
  // //     newNode.prev = prevNode;
  // //     this.length++;
  // //     this.printList();
  // //     //  this.printListReverse();
  // //     return this;
  
  // //   }
  
  // //   delete(index) {
  // //     if (index >= this.length || this.length <= 1) {
  // //       console.log('not possible to delete');
  // //       return this;
  // //     }
  // //     if (index === 0) {
  // //       let firstNode = this.head;
  // //       this.head = firstNode.next;
  // //       firstNode = null;
  // //       this.head.prev = null;
  // //       this.length--;
  // //       this.printList();
  // //       // this.printListReverse();
  // //       return this;
  // //     }
  
  
  // //     let prev = this.getNthNode(index - 1),
  // //       current = prev.next,
  // //       next = current.next;
  // //     prev.next = next;
  // //     if (next !== null) {
  // //       next.prev = prev;
  // //     }//can happen when tail node is to be deleted..
  // //     current.next = null;
  // //     current.prev = null;
  // //     current = null;
  // //     this.length--;
  // //     this.printList();
  // //     // this.printListReverse();
  // //     return this;
  // //   }
  
  // //   getNthNode(index) {
  // //     if (index < 0 || index >= this.length) {
  // //       console.log('bad value of index');
  // //       return;
  // //     }
  // //     let current = this.head,
  // //       count = 0;
  // //     while (count !== index) {
  // //       current = current.next;
  // //       count++;
  // //     }
  // //     return current;
  // //   }
  
  // //   printList() {
  // //     let current = this.head;
  // //     let values = [];
  // //     while (current !== null) {
  // //       values.push(current.value);
  // //       current = current.next;
  // //     }
  // //     console.log(`Linked list :: ${values.join(' --> ')}`);
  // //   }
  // //   printListReverse() {
  // //     let current = this.tail;
  // //     let values = [];
  // //     while (current !== null) {
  // //       values.push(current.value);
  // //       current = current.prev;
  // //     }
  // //     console.log(`Reversed Linked list :: ${values.join(' --> ')}`);
  // //   }
  
  // //   reverseList() {
  // //     if (this.length === 1) {
  // //       this.printList();
  // //       return this;
  // //     }
  // //     this.tail = this.head;
  // //     let first = this.head,
  // //       second = this.head.next;
  // //     while (second !== null) {
  // //       let temp = second.next;
  // //       second.next = first;
  // //       first.prev = second;
  // //       first = second;
  // //       second = temp;
  // //     }
  
  // //     this.head = first;
  // //     this.head.prev = null;
  // //     this.tail.next = null;
  // //     console.log('After reversing the list');
  // //     this.printList();
  // //   }
  // // }
  
  // // // let myList = new MyDoubleLinkedList(10);
  // // // myList.append(15);
  // // // myList.append(12);
  // // // myList.prepend(8);
  // // // myList.insert(4, 1);
  // // // myList.delete(0);
  // // // // myList.delete(1);
  // // // // myList.delete(2);
  // // // // myList.delete(0);
  // // // myList.reverseList();
  // // // console.log(myList);
  // // // Linked List Ends
  
  // // // Double linked list ends
  
  // // //Stacks Begins
  
  // // //Stack implementation using SingleLinkedList node
  
  // // class Stack {
  // //   constructor() {
  // //     this.top = null;
  // //     this.bottom = null;
  // //     this.length = 0;
  // //   }
  // //   peek() {
  // //     console.log(`The top node is ${this.top.value}`);
  // //     return this.top;
  // //   }
  // //   push(value) {
  // //     const node = new Node(value);
  // //     node.next = this.top;
  // //     this.top = node;
  // //     if (this.length === 0) {
  // //       this.bottom = node;
  // //     }
  // //     this.length++;
  // //     this.displayStack();
  // //   }
  // //   pop() {
  // //     if (this.length > 0) {
  // //       this.top = this.top.next;
  // //       this.length--;
  // //     }
  // //     if (this.length === 0) {
  // //       this.bottom = this.top;
  // //     }
  // //     this.displayStack();
  // //   }
  // //   displayStack() {
  // //     let current = this.top,
  // //       toDisplay = [];
  // //     while (current) {
  // //       toDisplay.push(current.value);
  // //       current = current.next;
  // //     }
  // //     console.log('The stack from top to bottom is :: ' + toDisplay.join(','));
  // //     //console.log(toDisplay.join(','));
  // //   }
  // //   //isEmpty
  // // }
  
  // // // const myStack = new Stack();
  // // // myStack.push('A')
  // // // myStack.push(12);
  // // // myStack.peek();
  // // // myStack.push(24);
  // // // myStack.push(10);
  // // // myStack.peek();
  // // // myStack.pop();
  // // // myStack.peek();
  // // // myStack.pop();
  // // // myStack.pop();
  // // // myStack.pop();
  // // // console.log(myStack);
  // // //Stack implementation using SingleLinkedList node ends
  
  // //Stack implementation using Array
  // class StackUsingArray {
  //   constructor() {
  //     this.data = [];
  //   }
  //   peek() {
  //     // console.log(this.data);
  //     //console.log(`The top node is ${this.data[this.data.length - 1]}`);
  //     return this.data[this.data.length - 1];
  //   }
  //   push(value) {
  //     return this.data.push(value);
  //     // this.displayArr();
  //   }
  //   pop() {
  //     return this.data.pop();
  //   }
  //   displayArr() {
  //     //  console.log(`The values of stack is ${this.data.join(',')}`)
  //   }
  //   getSize() {
  //     return this.data.length;
  //   }
  
  //   //isEmpty
  // }
  
  // // const myStackArr = new StackUsingArray();
  // // myStackArr.push(2);
  // // myStackArr.push(12);
  // // myStackArr.peek();
  // // myStackArr.push(24);
  // // myStackArr.push(10);
  // // myStackArr.peek();
  // // myStackArr.pop();
  // // myStackArr.peek();
  // // myStackArr.pop();
  // // myStackArr.pop();
  // // console.log(myStackArr);
  
  // //Stack ends 
  
  // //Queue starts
  
  // //Queue implementation using single linked list node
  
  // class Queue {
  //   constructor() {
  //     this.first = null;
  //     this.last = null;
  //     this.length = 0;
  //   }
  //   peek() {
  //     console.log(`The first item in queue is ${this.first.value}`);
  //     return this.first;
  //   }
  //   enqueue(value) {
  //     const node = new Node(value);
  //     if (this.length === 0) {
  //       this.first = node;
  //       this.last = node;
  //     } else {
  //       let tempNode = this.last;
  //       tempNode.next = node;
  //       this.last = node;
  //     }
  //     this.length++;
  //     this.printQueue();
  //     return this;
  //   }
  //   dequeue() {
  //     if (this.length > 0) {
  //       this.first = this.first.next;
  //       if (this.length === 1) {
  //         this.last = this.first;
  //       }
  //       this.printQueue();
  //       this.length--;
  //       return this;
  //     }
  //   }
  //   printQueue() {
  //     let current = this.first,
  //       toPrint = [];
  //     while (current) {
  //       toPrint.push(current.value);
  //       current = current.next;
  //     }
  //     console.log(`The value of queue from first to last is ${toPrint.join(' <-- ')}`);
  //   }
  // size(){
  //   return this.length === 0;
  // }
  //   //isEmpty;
  // }
  
  // const myQueue = new Queue();
  // myQueue.enqueue('Sneha');
  // myQueue.enqueue('Utkarsh');
  // myQueue.enqueue('Rakshit');
  // myQueue.enqueue('Vinay');
  // myQueue.enqueue('Ishan');
  // myQueue.peek();
  // myQueue.dequeue();
  // myQueue.enqueue('Shan');
  // myQueue.dequeue();
  
  //Implement queue using stacks
  
  // class QueueUsingStacks {
  //   constructor() {
  //     this.stackData = new StackUsingArray();
  //     this.first = null;
  
  //     this.length = 0;
  //   }
  //   push(value) {
  //     if (this.length === 0) {
  //       this.first = value;
  //     }
  
  //     this.stackData.push(value);
  //     this.length++;
  //   }
  //   pop() {
  //     if (this.length === 0) {
  //       return this;
  //     }
  //     if (this.length === 1) {
  //       this.stackData.pop();
  //       this.first = null;
  
  //       this.length--;
  //       return this;
  //     }
  //     let reversedData = this.getReversedStack(this.stackData);
  //     reversedData.pop();
  //     this.first = reversedData.peek();
  //     this.stackData = this.getReversedStack(reversedData);
  //     this.length--;
  //   }
  //   getReversedStack(stack) {
  //     let reversedStack = new StackUsingArray();
  //     let toIterate = stack.getSize();
  //     for (let i = 0; i < toIterate; i++) {
  //       //let temp = stack.pop();
  //       reversedStack.push(stack.pop());
  //     }
  //     return reversedStack;
  //   }
  //   peek() {
  //     console.log('the first value in queue is ' + this.first);
  //     return this.first;
  //   }
  //   size() {
  //     return this.length;
  //   }
  
  // }
  
  // const newQusingStack = new QueueUsingStacks();
  // newQusingStack.push('sneha');
  // newQusingStack.push('Utkarsh');
  // newQusingStack.pop();
  // newQusingStack.peek();
  // newQusingStack.push('snrhss');
  // console.log(newQusingStack.size());
  // console.log(newQusingStack.stackData.data);
  
  //Implement Queue using stacks (better with amortized O(1))
  
  // class QUsingStacks {
  //   constructor() {
  //     this.straight = [];
  //     this.reversed = [];
  //     this.front = null;
  //   }
  //   push(value) {
  //     if (this.isEmpty()) {
  //       this.front = value;
  //     }
  //     this.straight.push(value);
  //     return this;
  //   }
  //   pop() {
  //     if (this.reversed.length === 0) {
  //       let loopCount = this.straight.length;
  //       while (loopCount > 0) {
  //         this.reversed.push(this.straight.pop());
  //         loopCount--;
  //       }
  //       return this.reversed.pop();
  //     }
  //   }
  //   peek() {
  //     let toReturn;
  //     if (this.reversed.length === 0) {
  //       toReturn = this.front;
  //     } else {
  //       toReturn = this.reversed[this.reversed.length - 1];//peek of stack
  //     }
  //     console.log('The peek of queue is ' + toReturn);
  //     return toReturn;
  //   }
  //   isEmpty() {
  //     return this.straight.length === 0 && this.reversed.length === 0;
  //   }
  // }
  
  // const newQusingStack = new QUsingStacks();
  // newQusingStack.push('sneha');
  // newQusingStack.push('Utkarsh');
  // newQusingStack.peek();
  // newQusingStack.pop();
  // newQusingStack.peek();
  // newQusingStack.push('snrhss');
  // console.log(newQusingStack);
  
  //Queues Ends
  
  // Trees Starts ::
  
  // class BinaryTreeNode {
  //   constructor(value) {
  //     this.left = null;
  //     this.right = null;
  //     this.value = value;
  //   }
  // }
  
  // class BinarySearchTree {
  //   constructor() {
  //     this.root = null;
  //   }
  //   insert(value) {
  //     const newNode = new BinaryTreeNode(value);
  //     if (this.root === null) {
  //       this.root = newNode;
  //       return;
  //     }
  //     let current = this.root;
  //     while (current !== null) {
  //       if (current.value > value) {
  //         if (current.left === null) {
  //           current.left = newNode;
  //           // this.printTree();
  //           return;
  //         } else {
  //           current = current.left;
  //         }
  //       } else {
  //         if (current.right === null) {
  //           current.right = newNode;
  //           // this.printTree();
  //           return;
  //         } else {
  //           current = current.right;
  //         }
  //       }
  //     }
  //   }
  //   lookup(value) {
  //     let current = this.root;
  //     while (current !== null) {
  //       if (current.value === value) {
  //         return current;
  //       }
  //       else if (value > current.value) {
  //         current = current.right;
  //       }
  //       else {
  //         current = current.left;
  //       }
  //     }
  //     return null;
  //   }
  
  //   printTree() {
  //     console.log("Tree :: " + JSON.stringify(traverse(tree.root)));
  //   }
  
  //   bfs() {
  //     let toProcess = [this.root], values = [];
  //     while (toProcess.length > 0) {
  //       let parentNode = toProcess[0];
  //       if (parentNode.left) {
  //         toProcess.push(parentNode.left);
  //       }
  //       if (parentNode.right) {
  //         toProcess.push(parentNode.right);
  //       }
  //       values.push(parentNode.value);
  //       toProcess.shift(); //remove the parent node
  //     }
  //     console.log("BFS traversal is " + values.join(' => '));
  //   }
  
  //   inorder(node, list) {
  //     if (node.left) {
  //       this.inorder(node.left, list);
  //     }
  //     list.push(node.value);
  //     if (node.right) {
  //       this.inorder(node.right, list);
  //     }
  //     return list;
  //   }
  //   preorder(node, list) {
  //     list.push(node.value);
  //     if (node.left) {
  //       this.preorder(node.left, list);
  //     }
  //     if (node.right) {
  //       this.preorder(node.right, list);
  //     }
  //     return list;
  //   }
  //   postorder(node, list) {
  //     if (node.left) {
  //       this.postorder(node.left, list);
  //     }
  //     if (node.right) {
  //       this.postorder(node.right, list);
  //     }
  //     list.push(node.value);
  //     return list;
  //   }
  
  //   //validate if its valid Binary search tree or not..
  //   validate() {
  //     let processQueue = [this.root];
  //     while (processQueue.length > 0) {
  //       let current = processQueue.shift();
  //       //Here we have to calculate 2 values for each node which will be used their child nodes
  //       //leftParentValue and rightparentvalue.
  //       //if a child is on left side then its left parent value will be of its parents value and its right parent value will be whatever is of its parent right parent value. Basically to find out if any ancestor for left child is ever on right side. If yes then that value is to be recorded for comparison because the leftchild value should be greater than the place where the ancestor was on right side. Same principle applies to child on right side.
  //       if (current.left) {
  //         current.left.leftParentValue = current.value;
  //         current.left.rightParentValue = current.rightParentValue;
  
  //         //check parent should be greater than left child
  //         let leftValue = current.left.value;
  //         if (current.value <= leftValue) {
  //           return false;
  //         }
  
  //         //check leftchild should be greater than right parent(ancestor on the right side)
  //         let rightParentValue = current.rightParentValue;
  //         if (rightParentValue && leftValue <= rightParentValue) {
  //           return false;
  //         }
  
  //         processQueue.push(current.left);
  //       }
  //       if (current.right) {
  //         current.right.rightParentValue = current.value;
  //         current.right.leftParentValue = current.leftParentValue;
  
  //         //check parent should be lesser than right child
  //         let rightValue = current.right.value;
  //         if (current.value >= rightValue) {
  //           return false;
  //         }
  
  //         //check rightchild should be lesser than left parent(ancestor on the left side)
  //         let letParentValue = current.leftParentValue;
  //         if (letParentValue && rightValue >= letParentValue) {
  //           return false
  //         }
  
  //         processQueue.push(current.right);
  //       }
  
  //     }
  //     return true;
  //   }
  
  
  //   remove(value) {
  //     if (!this.root) {
  //       return false;
  //     }//no tree   
  
  //     let current = this.root,
  //       direction = (value > current.value) ? 'right' : 'left',
  //       currentParent = null;
  
  //     while (current !== null) {
  
  //       if (value === current.value) {
  //         let successor;
  //         if (current.left === null && current.right === null) {
  //           //leaf nodes
  //           successor = null;
  //         } else if (current.left === null || current.right === null) {
  //           // if only one side is present
  //           successor = current.left;
  //           if (current.left === null) {
  //             successor = current.right;
  //           }
  //         } else {
  //           //if both sides are present.. 
  //           //find the least which is greater than the current..
  //           //traverse right first then left onwards till leaf is encounter
  //           successor = current.right;
  //           let successorParent;
  //           while (successor.left !== null) {
  //             successorParent = successor;
  //             successor = successor.left;
  //           }
  //           let successorChild = successor.right;
  //           successor.left = current.left;
  //           if (current.right !== successor) {
  //             successor.right = current.right;
  //             if (successorChild) {
  //               successorParent.left = successorChild;
  //             }
  //           }
  //         }
  
  //         //attach parent with new successor
  //         if (currentParent) {
  //           currentParent[direction] = successor;
  //         } else {
  //           this.root = successor;
  //         }
  
  //         return true;
  //       }//node found
  
  //       currentParent = current;
  //       direction = (value > current.value) ? 'right' : 'left';
  //       current = current[direction];
  //     }
  //     return false;
  //   }
  
  // }
  
  // function traverse(node) {
  //   const tree = { value: node.value };
  //   tree.left = node.left === null ? null : traverse(node.left);
  //   tree.right = node.right === null ? null : traverse(node.right);
  //   return tree;
  // }
  
  // const tree = new BinarySearchTree();
  // // tree.insert(9)
  // // tree.insert(4)
  // // tree.insert(6)
  // // tree.insert(20)
  // // tree.insert(170)
  // // tree.insert(15)
  // // tree.insert(1)
  // //console.log('To remove is : ' + tree.remove(1));
  // //console.log('To remove is : ' + tree.remove(20));
  // //console.log('To remove is : ' + tree.remove(20));
  // tree.insert(5);
  // tree.insert(4);
  // tree.insert(8);
  // tree.insert(6);
  // tree.insert(7);
  // tree.printTree();
  // tree.bfs();
  // //console.log('Tree lookup 20 :: ' + tree.lookup(20));
  // // console.log('Tree inorder traversal ' + tree.inorder(tree.root, []).join(' , '))
  // // console.log('Tree preorder traversal ' + tree.preorder(tree.root, []).join(' , '))
  // // console.log('Tree postorder traversal ' + tree.postorder(tree.root, []).join(' , '))
  // //tree.root.value = 25;
  // //tree.root.right.left.value = 3;
  // tree.bfs();
  // console.log('Validate tree : ' + tree.validate());
  // // //     9
  // //  4     20
  // //1  6  15  170
  
  // //      5
  // //  4       6
  ////////////3     7
  
  
  // class Graph {
  //   constructor() {
  //     this.numberOfNodes = 0;
  //     this.adjacentList = {
  //       // 0 : [ 1, 2]
  //       // 1 : [0]      0 - 1
  //     };
  //   }
  //   addVertex(node) {
  //     this.adjacentList[node] = [];
  //     this.numberOfNodes++;
  //   }
  //   addEdge(node1, node2) {
  //     this.adjacentList[node1].push(node2);
  //     this.adjacentList[node2].push(node1);
  //     //undirected Graph 
  //   }
  //   showConnections() {
  //     const allNodes = Object.keys(this.adjacentList);
  //     for (let node of allNodes) {
  //       let nodeConnections = this.adjacentList[node];
  //       let connections = "";
  //       let vertex;
  //       for (vertex of nodeConnections) {
  //         connections += vertex + " ";
  //       }
  //       console.log(node + "-->" + connections);
  //     }
  //   }
  // }
  
  // const myGraph = new Graph();
  // myGraph.addVertex('0');
  // myGraph.addVertex('1');
  // myGraph.addVertex('2');
  // myGraph.addVertex('3');
  // myGraph.addVertex('4');
  // myGraph.addVertex('5');
  // myGraph.addVertex('6');
  // myGraph.addEdge('3', '1');
  // myGraph.addEdge('3', '4');
  // myGraph.addEdge('4', '2');
  // myGraph.addEdge('4', '5');
  // myGraph.addEdge('1', '2');
  // myGraph.addEdge('1', '0');
  // myGraph.addEdge('0', '2');
  // myGraph.addEdge('6', '5');
  
  // myGraph.showConnections();
  // 0-->1 2
  // 1-->3 2 0 
  // 2-->4 1 0 
  // 3-->1 4 
  // 4-->3 2 5 
  // 5-->4 6 
  // 6-->5 
  
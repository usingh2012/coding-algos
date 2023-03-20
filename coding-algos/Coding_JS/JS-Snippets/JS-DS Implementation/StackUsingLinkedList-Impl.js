  
  // // //Stack implementation using SingleLinkedList node
    class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
}
  class Stack {
    constructor() {
      this.top = null;
    //  this.bottom = null;
      this.length = 0;
    }
    peek() {
      console.log(`The top node is ${this.top.value}`);
      return this.top;
    }
    push(value) {
      const node = new Node(value);
      node.next = this.top;
      this.top = node;
      if (this.length === 0) {
     //   this.bottom = node;
      }
      this.length++;
      this.displayStack();
    }
    pop() {
      if (this.length > 0) {
        this.top = this.top.next;
        this.length--;
      }
      if (this.length === 0) {
     //   this.bottom = this.top;
      }
      this.displayStack();
    }
    displayStack() {
      let current = this.top,
        toDisplay = [];
      while (current) {
        toDisplay.push(current.value);
        current = current.next;
      }
      console.log('The stack from top to bottom is :: ' + toDisplay.join(','));
      //console.log(toDisplay.join(','));
    }
    //isEmpty
  }
  
  const myStack = new Stack();
  myStack.push('A')
  myStack.push(12);
  myStack.peek();
  myStack.push(24);
  myStack.push(10);
  myStack.peek();
  myStack.pop();
  myStack.peek();
  myStack.pop();
  myStack.pop();
  myStack.pop();
  console.log(myStack);
  // // //Stack implementation using SingleLinkedList node ends
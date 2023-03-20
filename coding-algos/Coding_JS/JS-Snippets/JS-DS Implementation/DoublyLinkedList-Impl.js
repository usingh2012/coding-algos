class DoubleNode {
    constructor(value) {
      this.value = value;
      this.next = null;
      this.prev = null;
    }
  }
  
  class MyDoubleLinkedList {
    constructor(initValue) {
      this.head = new DoubleNode(initValue);
      this.tail = this.head;
      this.length = 1;
    }
  
    append(value) {
      let node = new DoubleNode(value);
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
      this.length++;
      this.printList();
      //  this.printListReverse();
      return this;
    }
  
    prepend(value) {
      let node = new DoubleNode(value);
      node.next = this.head;
      node.prev = null;
      this.head.prev = node;
      this.head = node;
      this.length++;
      this.printList();
      // this.printListReverse();
      return this;
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
        newNode = new DoubleNode(value);
      newNode.next = nextNode;
      prevNode.next = newNode;
      nextNode.prev = newNode;
      newNode.prev = prevNode;
      this.length++;
      this.printList();
      //  this.printListReverse();
      return this;
  
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
        this.head.prev = null;
        this.length--;
        this.printList();
        // this.printListReverse();
        return this;
      }
  
  
      let prev = this.getNthNode(index - 1),
        current = prev.next,
        next = current.next;
      prev.next = next;
      if (next !== null) {
        next.prev = prev;
      }//can happen when tail node is to be deleted..
      current.next = null;
      current.prev = null;
      current = null;
      this.length--;
      this.printList();
      // this.printListReverse();
      return this;
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
      console.log(`Linked list :: ${values.join(' --> ')}`);
    }
    printListReverse() {
      let current = this.tail;
      let values = [];
      while (current !== null) {
        values.push(current.value);
        current = current.prev;
      }
      console.log(`Reversed Linked list :: ${values.join(' --> ')}`);
    }
  
    reverseList() {
      if (this.length === 1) {
        this.printList();
        return this;
      }
      this.tail = this.head;
      let first = this.head,
        second = this.head.next;
      while (second !== null) {
        let temp = second.next;
        second.next = first;
        first.prev = second;
        first = second;
        second = temp;
      }
  
      this.head = first;
      this.head.prev = null;
      this.tail.next = null;
      console.log('After reversing the list');
      this.printList();
    }
  }
  
  let myList = new MyDoubleLinkedList(10);
  myList.append(15);
  myList.append(12);
  myList.prepend(8);
  myList.insert(4, 1);
  myList.delete(0);
  // myList.delete(1);
  // myList.delete(2);
  // myList.delete(0);
  myList.reverseList();
  console.log(myList);

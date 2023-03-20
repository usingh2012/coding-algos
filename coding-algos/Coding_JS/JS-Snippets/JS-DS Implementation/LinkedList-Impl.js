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

 let myList = new MyLinkedList(10);
  myList.append(15);
  myList.append(12);
  myList.prepend(8);
  myList.insert(4, 1);
  myList.delete(0);
  myList.reverseList();
  myList.delete(1);
  myList.delete(2);
  myList.delete(0);
  console.log(myList);
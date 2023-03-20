  // //Stack implementation using Array
  class StackUsingArray {
    constructor() {
      this.data = [];
    }
    peek() {
      // console.log(this.data);
      //console.log(`The top node is ${this.data[this.data.length - 1]}`);
      return this.data[this.data.length - 1];
    }
    push(value) {
      return this.data.push(value);
      // this.displayArr();
    }
    pop() {
      return this.data.pop();
    }
    displayArr() {
        console.log(`The values of stack is ${this.data.join(',')}`)
    }
    getSize() {
      return this.data.length;
    }
  
    //isEmpty
  }
  
  const myStackArr = new StackUsingArray();
  myStackArr.push(2);
  myStackArr.push(12);
  myStackArr.peek();
  myStackArr.push(24);
  myStackArr.push(10);
  myStackArr.displayArr();
  myStackArr.peek();
  myStackArr.pop();
  myStackArr.peek();
  myStackArr.pop();
  myStackArr.pop();
  console.log(myStackArr);
  myStackArr.displayArr();
  
  // //Stack ends 
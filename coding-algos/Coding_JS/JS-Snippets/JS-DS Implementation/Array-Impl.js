class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
  }
  get(index) {
    return this.data[index];
  }
}

const myarr = new MyArray();
myarr.push('hi');
console.log(myarr);
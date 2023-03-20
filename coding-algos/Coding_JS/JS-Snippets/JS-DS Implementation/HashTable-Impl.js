// // // Hashtable begins //
class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    console.log(`the hash for key ${key} is ${hash}`)
    return hash;
  }//this is inbuilt in all the languages and is very fast.. So timecomplexity for this is o(1)

  set(key, value) {
    let location = this._hash(key);
    if (typeof this.data[location] === 'undefined') {
      this.data[location] = [];
    }
    this.data[location].push([key, value]);
    console.log(this.data);     
  }

  get(key) {
    let location = this._hash(key);
    const valueBlock = this.data[location];
    if (valueBlock) {
      for (let i = 0; i < valueBlock.length; i++) {
        if (valueBlock[i][0] === key) {
          return valueBlock[i][1];
        }
      }
    }

  }

  keys() {
    const keysArr = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        let currentBlock = this.data[i];
        for (let j = 0; j < currentBlock.length; j++) {
          keysArr.push(currentBlock[j][0]);
        }
      }
    }
    return keysArr;
  }

  values() {
    const valuesArr = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        let currentBlock = this.data[i];
        for (let j = 0; j < currentBlock.length; j++) {
          valuesArr.push(currentBlock[j][1]);
        }
      }
    }
    return valuesArr;
  }
}

const myHashTable = new HashTable(2);
myHashTable.set('grapes', 10000)
console.log(myHashTable.get('grapes'));
myHashTable.set('apples', 9)
myHashTable.set('oranges', 2)
myHashTable.set('mango', 3)
console.log(myHashTable.get('apples'));
console.log(myHashTable.keys());
console.log(`The values are : ${myHashTable.values()}`);
// // //HashTable ends//
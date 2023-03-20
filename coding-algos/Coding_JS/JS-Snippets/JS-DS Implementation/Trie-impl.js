class TrieNode {
  constructor(val) {
    this.val = val;
    this.isEndNode = false;
    this.next = {};
  }
}
class Trie {
  constructor() {
    this._root = new TrieNode("root");
  }
  insert(word) {
    let currentParent = this._root;
    for (let i = 0; i < word.length; i++) {
      let currentChar = word.charAt(i);

      let alreadyExist = currentParent.next[currentChar];
      if (alreadyExist) {
        currentParent = alreadyExist;
      } else {
        let newNode = new TrieNode(currentChar);
        currentParent.next[currentChar] = newNode;
        currentParent = newNode;
      }
      if (i === word.length - 1) {
        currentParent.isEndNode = true;
      }//change to true only for the last word
    }
  }
  _find(word) {
    let currentParent = this._root;
    for (let i = 0; i < word.length; i++) {
      let currentChar = word.charAt(i);
      let matched = currentParent.next[currentChar];
      if (!matched) {
        return false;
      } else {
        currentParent = matched;
      }
    }
    return currentParent;
  }
  search(word) {
    let searchResult = this._find(word);
    if (searchResult) {
      return searchResult.isEndNode;
    }
    return false;
  }
  startsWith(prefix) {
    let result = this._find(word);
    if (result) {
      return true;
    } else {
      return false;
    }
  }
}

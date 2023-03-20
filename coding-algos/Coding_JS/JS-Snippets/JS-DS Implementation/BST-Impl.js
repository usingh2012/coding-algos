class BinaryTreeNode {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new BinaryTreeNode(value);
    if (this.root === null) {
      this.root = newNode;
      return;
    }
    let current = this.root;
    while (current !== null) {
      if (current.value > value) {
        if (current.left === null) {
          current.left = newNode;
          // this.printTree();
          return;
        } else {
          current = current.left;
        }
      } else {
        if (current.right === null) {
          current.right = newNode;
          // this.printTree();
          return;
        } else {
          current = current.right;
        }
      }
    }
  }
  lookup(value) {
    let current = this.root;
    while (current !== null) {
      if (current.value === value) {
        return current;
      } else if (value > current.value) {
        current = current.right;
      } else {
        current = current.left;
      }
    }
    return null;
  }

  printTree() {
    console.log("Tree :: " + JSON.stringify(traverse(tree.root)));
  }

  bfs() {
    let toProcess = [this.root],
      values = []; //queue implementation should be used here because push and shift is required..
    while (toProcess.length > 0) {
      let parentNode = toProcess[0];
      if (parentNode.left) {
        toProcess.push(parentNode.left);
      }
      if (parentNode.right) {
        toProcess.push(parentNode.right);
      }
      values.push(parentNode.value);
      toProcess.shift(); //remove the parent node
    }
    console.log("BFS traversal is " + values.join(" => "));
  }

  inorder(node, list) {
    if (node.left) {
      this.inorder(node.left, list);
    }
    list.push(node.value);
    if (node.right) {
      this.inorder(node.right, list);
    }
    return list;
  }
  preorder(node, list) {
    list.push(node.value);
    if (node.left) {
      this.preorder(node.left, list);
    }
    if (node.right) {
      this.preorder(node.right, list);
    }
    return list;
  }
  postorder(node, list) {
    if (node.left) {
      this.postorder(node.left, list);
    }
    if (node.right) {
      this.postorder(node.right, list);
    }
    list.push(node.value);
    return list;
  }

  //validate if its valid Binary search tree or not..
  validate() {
    let processQueue = [this.root];
    while (processQueue.length > 0) {
      let current = processQueue.shift();
      //Here we have to calculate 2 values for each node which will be used their child nodes
      //leftParentValue and rightparentvalue.
      //if a child is on left side then its left parent value will be of its parents value and
      // its right parent value will be whatever is of its parent right parent value.
      //Basically to find out if any ancestor for left child is ever on right side.
      //If yes then that value is to be recorded for comparison because
      //the leftchild value should be greater than the place where the ancestor was on right side.
      //Same principle applies to child on right side.
      if (current.left) {
        current.left.leftParentValue = current.value;
        current.left.rightParentValue = current.rightParentValue;

        //check parent should be greater than left child
        let leftValue = current.left.value;
        if (current.value <= leftValue) {
          return false;
        }

        //check leftchild should be greater than right parent(ancestor on the right side)
        let rightParentValue = current.rightParentValue;
        if (rightParentValue && leftValue <= rightParentValue) {
          return false;
        }

        processQueue.push(current.left);
      }
      if (current.right) {
        current.right.rightParentValue = current.value;
        current.right.leftParentValue = current.leftParentValue;

        //check parent should be lesser than right child
        let rightValue = current.right.value;
        if (current.value >= rightValue) {
          return false;
        }

        //check rightchild should be lesser than left parent(ancestor on the left side)
        let letParentValue = current.leftParentValue;
        if (letParentValue && rightValue >= letParentValue) {
          return false;
        }

        processQueue.push(current.right);
      }
    }
    return true;
  }

  remove(value) {
    if (!this.root) {
      return false;
    } //no tree

    let current = this.root,
      direction = value > current.value ? "right" : "left",
      currentParent = null;

    while (current !== null) {
      if (value === current.value) {
        let successor;
        if (current.left === null && current.right === null) {
          //leaf nodes
          successor = null;
        } else if (current.left === null || current.right === null) {
          // if only one side is present
          successor = current.left;
          if (current.left === null) {
            successor = current.right;
          }
        } else {
          //if both sides are present..
          //find the least which is greater than the current..
          //traverse right first then left onwards till leaf is encounter
          successor = current.right;
          let successorParent;
          while (successor.left !== null) {
            successorParent = successor;
            successor = successor.left;
          }
          let successorChild = successor.right;
          successor.left = current.left;
          if (current.right !== successor) {
            successor.right = current.right;
            if (successorChild) {
              successorParent.left = successorChild;
            }
          }
        }

        //attach parent with new successor
        if (currentParent) {
          currentParent[direction] = successor;
        } else {
          this.root = successor;
        }

        return true;
      } //node found

      currentParent = current;
      direction = value > current.value ? "right" : "left";
      current = current[direction];
    }
    return false;
  }
}

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
//console.log('To remove is : ' + tree.remove(1));
//console.log('To remove is : ' + tree.remove(20));
//console.log('To remove is : ' + tree.remove(20));
tree.insert(5);
tree.insert(4);
tree.insert(8);
tree.insert(6);
tree.insert(7);
tree.printTree();
tree.bfs();
//console.log('Tree lookup 20 :: ' + tree.lookup(20));
console.log('Tree inorder traversal ' + tree.inorder(tree.root, []).join(' , '))
console.log('Tree preorder traversal ' + tree.preorder(tree.root, []).join(' , '))
console.log('Tree postorder traversal ' + tree.postorder(tree.root, []).join(' , '))
//tree.root.value = 25;
//tree.root.right.left.value = 3;
tree.bfs();
console.log("Validate tree : " + tree.validate());
// //     9
//  4     20
//1  6  15  170

//      5
//  4       6
//////////3     7

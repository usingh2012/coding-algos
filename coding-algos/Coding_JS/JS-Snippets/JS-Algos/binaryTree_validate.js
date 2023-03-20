/**
 * https://leetcode.com/problems/validate-binary-search-tree/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
   let processQueue = [root];
    while (processQueue.length > 0) {      
      let current = processQueue.shift(); 
      //Here we have to calculate 2 values for each node which will be used their child nodes
      //leftParentValue and rightparentvalue.
      /*if a child is on left side then its left parent value will be of its parents value 
      and its right parent value will be whatever is of its parent right parent value. 
      Basically to find out if any ancestor for left child is ever on right side. 
      If yes then that value is to be recorded for comparison because the leftchild value 
      should be greater than the place where the ancestor was on right side. 
      Same principle applies to child on right side.*/
      if (current.left) {
        current.left.leftParentValue = current.val;
        current.left.rightParentValue = current.rightParentValue;        

        //check parent should be greater than left child
        let leftValue = current.left.val;
        if (current.val <= leftValue) {
          return false;
        }

        //check leftchild should be greater than right parent(ancestor on the right side)
        let rightParentValue =  current.rightParentValue;
        if (rightParentValue && leftValue <= rightParentValue) {
          return false;
        }

        processQueue.push(current.left);
      }
      if (current.right) {
        current.right.rightParentValue = current.val;
        current.right.leftParentValue = current.leftParentValue;

        //check parent should be lesser than right child
        let rightValue = current.right.val;
        if (current.val >= rightValue) {
          return false;
        }

        //check rightchild should be lesser than left parent(ancestor on the left side)
       let letParentValue = current.leftParentValue;
        if (letParentValue && rightValue >= letParentValue) {
          return false
        }

        processQueue.push(current.right);
      }

    }
    return true;
};

var isValidBSTUsingDFSInOrder = function(root) {
    
  const inorderTraversal = (node, values) => {
    if (!node) {
      return;
    }
    inorderTraversal(node.left, values);
    values.push(node.val);
    inorderTraversal(node.right, values);
  }

  let result = [];
  inorderTraversal(root, result);

  for (let i = 0; i < result.length - 1; i++){
    if (result[i] >= result[i + 1]) {
      return false;
    }
  }
  return true;
};

var isValidBSTUsingDFSPreOrder = function(root) {
  let isNotValid = false;
  const preOrderTraversal = (node, lowerLimit, upperLimit) => {
    if (isNotValid) {
      return;
    }
    if (!node) {
      return;
    }
    if (node > upperLimit || node < lowerLimit) {
      isNotValid = true;
    }
    preOrderTraversal(node.left, lowerLimit, node.val);   
    preOrderTraversal(node.right, node.val, upperLimit);
  }

  preOrderTraversal(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);  
};


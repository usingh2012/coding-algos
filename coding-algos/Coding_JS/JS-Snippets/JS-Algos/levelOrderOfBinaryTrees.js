//https://leetcode.com/problems/binary-tree-level-order-traversal/


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 * 
 * Input: root = [3,9,20,null,null,15,7]
 * Output: [[3],[9,20],[15,7]]
 */
var levelOrder = function(root) {   
    if (!root) {
         return [];
     }
     let toProcess = [[root]],
         result = [[root.val]];
     while (true) {
         let currentLevelNodes = toProcess[toProcess.length - 1];
         let nextLevelNodes = [], nextLevelNodesVal = [];
         for (let nodes of currentLevelNodes) {
             if (nodes.left) {
                 nextLevelNodes.push(nodes.left);
                 nextLevelNodesVal.push(nodes.left.val);
             }
             if (nodes.right) {
                 nextLevelNodes.push(nodes.right);
                 nextLevelNodesVal.push(nodes.right.val);
             }
         }
         if (nextLevelNodes.length === 0) {
             return result;
         } else {
             toProcess.push(nextLevelNodes);
             result.push(nextLevelNodesVal);
         }
     }  
};
 
var levelOrderUsingQueues = function (root) {
    if (!root) {
        return [];
    }
    let processQ = [root], result = [[root.val]];
    while(processQ.length){
        let currentLevelLength = processQ.length,
            counter = 0, nextLevelValues = [];        
        while (counter < currentLevelLength) {
            let currentNode = processQ.shift();
            if (currentNode.left) {
                processQ.push(currentNode.left);
                nextLevelValues.push(currentNode.left.val);
            }
            if (currentNode.right) {
                processQ.push(currentNode.right);
                nextLevelValues.push(currentNode.right.val);
            }                
            counter++;
        }
        if (nextLevelValues.length !== 0) {
            result.push(nextLevelValues);            
        }
    }
    return result;
}


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
 * @return {number[]}
 */
var rightSideView = function(root) {
    if (!root) {
        return [];
    }
    let processQ = [root],
        rightSideValues = [];
    while (processQ.length) {
        let currentLevelLength = processQ.length,
            counter = 0;
        while (counter < currentLevelLength) {
            let currentNode = processQ.shift();
            if (counter === currentLevelLength - 1) {
                rightSideValues.push(currentNode.val);
            }
            if (currentNode.left) {
                processQ.push(currentNode.left);
            }
            if (currentNode.right) {
                processQ.push(currentNode.right);
            }
            counter++;
        }
    }
    return rightSideValues;
};

const rigthSideViewDFS = (root) => {
    const result = [];
    dfsTraversal(root, 0, result);
    return result;
}

function dfsTraversal(node, level, result) {
    if (!node) {
        return;
    }
    if (typeof result[level] === 'undefined') {
        result[level] = node;
    }
    level++;
    dfsTraversal(node.right, level, result);
    dfsTraversal(node.left, level, result);
}

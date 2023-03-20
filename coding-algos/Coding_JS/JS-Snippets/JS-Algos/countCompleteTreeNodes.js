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
 * @return {number}
 */
var countNodes = function(root) {
    if (!root) {
        return 0;
    }
    let current = root, depth = 0;
    while (current !== null) {
        depth++;
        current = current.left;
    }
    let countOfNotPresentLeaves = 0;
    const postOrderTraversal = (node, level) => {
        if (level === depth) {
            return countOfNotPresentLeaves;
        }
        if (!node) {
            countOfNotPresentLeaves++;
            return;
        }       
        level++;
        postOrderTraversal(node.right, level);
        postOrderTraversal(node.left, level);
        return countOfNotPresentLeaves;
    }
    postOrderTraversal(root, 1);
    let numberOfNodes = Math.pow(2, depth) - 1 - countOfNotPresentLeaves;
    return numberOfNodes;
};
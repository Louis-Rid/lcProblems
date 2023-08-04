/* 
===== Problem 1 =====

Problem Name: Path Sum
Problem Description: Given the root of a binary tree and an integer targetSum, return true if the tree has a
root-to-leaf path such that adding up all the values along the path equals targetSum.
A leaf is a node with no children.

Where I had issues: For the most part the logic of this problem came pretty easy to me. I did get caught up when I needed end the recursion when targetSum
was met. I ended up just storging a variable and updating it when the condition was met to true. I am not super happy with this solution though because even
after my solution has found the targetSum, the solution iterates throught the rest of the tree.

My Answer:
*/

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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
    if (!root) return false;
    let total = root.val;
    let res = false
    traverse(root)
    return res;

    function traverse(node) {
        if (!node) return;
        if (res) return;
        if (node.left) {
            total += node.left.val;
            traverse(node.left);
        }
        if (node.right) {
            total += node.right.val;
            traverse(node.right);
        }
        if (!node.right && !node.left && total == targetSum) res = true;
        total -= node.val;
    }
};

/* 
===== Problem 2 =====

Problem Name: Minimum Depth of Binary Tree
Problem Description: Given a binary tree, find its minimum depth.
The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
Note: A leaf is a node with no children.

Where I had issues: I really struggled with storing the minimum value that I found. So, I decided to push every leaf node's depth to an array, then use Math.min(...arr) to return the smallest depth.

My Answer:
*/

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
var minDepth = function (root) {
    if (!root)
        return 0;
    res = 10000005;
    dfs(root, 1);
    function dfs(root, depth) {
        if (!root) return;
        if (!root.left && !root.right) {
            res = Math.min(res, depth);
            return;
        }
        dfs(root.left, depth + 1);
        dfs(root.right, depth + 1);
    }
    return res;
};
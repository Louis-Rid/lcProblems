// Which of these would be prefered in a interview?

// My solution
var countNodes = function (root) {
    if (!root) return 0;
    if (!root.left && !root.right) return 1;
    let count = 0;

    traverse(root);
    return count;

    function traverse(node) {
        if (!node) return;
        count++;
        traverse(node.left);
        traverse(node.right);
    }
};

// Other solution

var countNodes = function (root) {
    if (!root) return 0;
    return countNodes(root.left) + countNodes(root.right) + 1;
};
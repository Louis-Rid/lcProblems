// Which of these solutions would be prefered in an interview?

// My solution
var invertTree = function (root) {
    if (!root) return root;
    invertTree(root.left);
    var temp = root.right;
    root.right = root.left;
    root.left = temp;
    invertTree(root.left);
    return root;
};

// Other solution

var invertTree = function (root) {
    if (!root) return root;
    invertTree(root.left);
    invertTree(root.right);
    var temp = root.right;
    root.right = root.left;
    root.left = temp;
    return root;
};
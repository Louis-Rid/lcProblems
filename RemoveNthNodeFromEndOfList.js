var removeNthFromEnd = function (head, n) {
    // Base Case
    if (head && n && !head.next) return null;

    // Calculate Length of Linked List
    var temp = head;
    var len = 1;
    while (temp) {
        len++;
        temp = temp.next;
    }

    // State Variables
    var prev = null;
    var depthTarget = len - n;
    var count = 1;

    if (depthTarget === 1) return head.next; // Handles if the first list item is to be removed

    // Recursion Function
    var remove = function (node) {
        if (!node) return;
        if (count !== depthTarget) {
            if (prev) prev.next = node;
            prev = node;
        }
        else prev.next = null;
        count++;
        remove(node.next)
    }

    remove(head);

    return head;
};
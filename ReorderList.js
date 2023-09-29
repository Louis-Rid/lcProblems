var reorderList = function (head) {
    // Find Middle of List
    var slow = head;
    var fast = head;

    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Reverse Second List
    var prev = null;
    var reverse = slow.next;
    while (reverse) {
        var temp = reverse.next;
        reverse.next = prev;
        prev = reverse
        reverse = temp;
    }

    // Break 2nd list from 1st list
    slow.next = null;

    // Merge Lists
    var l1 = head;
    var l2 = prev;

    while (l2) {
        var temp = l1.next;
        l1.next = l2;
        l2 = temp;
        l1 = l1.next;
    }
};
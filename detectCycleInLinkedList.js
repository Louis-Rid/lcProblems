var hasCycle = function (head) {
    fast = head;

    while (fast && fast.next) {
        fast = fast.next.next;
        head = head.next;

        if (head === fast) {
            return true
        }
    }

    return false;
};
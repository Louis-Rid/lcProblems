var mergeTwoLists = function (l1, l2) {
    if (!l1 && !l2) return null;
    if (!l1 && l2) return l2;
    if (l1 && !l2) return l1;

    var l3 = new ListNode();
    var cur = l3

    while (cur) {
        var curL1 = l1 ? l1.val : 101;
        var curL2 = l2 ? l2.val : 101;

        if (curL1 <= curL2) {
            cur.val = curL1;
            l1 = l1.next;
        }
        else if (curL2 < curL1) {
            cur.val = curL2;
            l2 = l2.next;
        }

        cur.next = (l1 || l2) ? new ListNode(null, null) : null;
        cur = cur.next;
    }

    return l3;
};
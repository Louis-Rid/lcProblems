var mergeKLists = function (lists) {
    function merge(l1, l2) {
        if (!l1) return l2;
        if (!l2) return l1;

        if (l1.val < l2.val) {
            l1.next = merge(l1.next, l2);
            return l1;
        } else {
            l2.next = merge(l1, l2.next);
            return l2;
        }
    }

    var res = null;

    for (let i = 0; i < lists.length; i++) {
        res = merge(res, lists[i]);
    }

    return res;
};
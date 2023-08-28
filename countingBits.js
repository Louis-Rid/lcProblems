var countBits = function (n) {
    var arr = [0];

    for (let i = 1; i < n + 1; i++) {
        var count = 0;
        var cur = i;
        while (cur) {
            if (cur & 1) count++;
            cur = cur >>> 1;
        }
        arr.push(count);
    }

    return arr
};
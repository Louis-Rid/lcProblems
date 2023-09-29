var merge = function (int) {
    var intervals = int.sort((a, b) => {
        if (a[0] === b[0]) return 0;
        else return (a[0] < b[0]) ? -1 : 1;
    });

    var res = new Array();
    var prev;
    for (let i = 0; i < intervals.length; i++) {
        if (!res.length || prev[1] < intervals[i][0]) {
            res.push(intervals[i]);
            prev = res[res.length - 1]
        } else {
            var min = Math.min(res[res.length - 1][0], intervals[i][0]);
            var max = Math.max(res[res.length - 1][1], intervals[i][1]);
            res[res.length - 1] = [min, max];
            prev = res[res.length - 1]
        }
    }

    return res;
};
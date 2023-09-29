var eraseOverlapIntervals = function (i) {
    intervals = i.sort((a, b) => {
        if (a[1] === b[1]) return 0;
        else return (a[1] < b[1]) ? -1 : 1;
    })

    var prev = intervals[0];
    var removedIntervals = 0;
    for (let i = 1; i < intervals.length; i++) {
        if (prev[1] > intervals[i][0]) removedIntervals++;
        else prev = intervals[i];
    }

    return removedIntervals;
};
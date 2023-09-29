var insert = function (intervals, newInterval) {
    let n = intervals.length;

    // Base Cases
    if (!n) return [newInterval]
    if (intervals[n - 1][1] < newInterval[0]) return [...intervals, newInterval];
    if (intervals[0][0] > newInterval[1]) return [newInterval, ...intervals];

    let res = new Array();
    let i = 0;
    // Finding the starting positon of newInterval
    for (i; i < n; i++) {
        let s = newInterval[0];
        if (s > intervals[i][1]) res.push(intervals[i]);
        else if (s >= intervals[i][0] && s <= intervals[i][1]) {
            newInterval[0] = intervals[i][0];
            break;
        }
        else if (s < intervals[i][0]) break;
    }

    // Finding the end poisiton onf newInterval
    for (i; i < n; i++) {
        let e = newInterval[1];

        if (e >= intervals[i][0] && e <= intervals[i][1]) {
            newInterval[1] = intervals[i][1];
            res.push(newInterval);
            i++
            break;
        }
        else if (e > intervals[i][1] && i === n - 1) {
            res.push(newInterval);
        }
        else if (e < intervals[i][0]) {
            res.push(newInterval)
            break
        }
    }
    // Filling in the rest of the res array with remaing intervals
    for (i; i < n; i++) {
        res.push(intervals[i]);
    }

    return res;
};
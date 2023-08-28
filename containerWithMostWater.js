var maxArea = function (h) {
    var max = 0;
    var i = 0;
    var j = h.length - 1;

    while (i < j) {
        var height = Math.min(h[i], h[j]);
        var width = j - i;
        max = Math.max(max, height * width)
        if (h[j] < h[i]) j--;
        else i++;
    }

    return max;
};
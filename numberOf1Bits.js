var hammingWeight = function (n) {
    let res = 0;
    for (let i = 0; i < 16; i++) {
        var bit = n & 3;
        if (bit == 3) res += 2;
        else if (bit == 0);
        else res++;
        n >>= 2;
    }
    return res;
};

// New solution after learning more about bit operators
var hammingWeight = function (n) {
    var count = 0;

    while (n > 0) {
        if (n & 1) count++;
        n = n >>> 1;
    }

    return count;
};
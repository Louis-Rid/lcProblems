// How could this be made to loop only 8 or 4 times?

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
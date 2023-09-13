var reverseBits = function (n) {
    let result = 0;

    for (let i = 0; i < 32; i++) {
        var lastBit = n & 1;
        var revLastBit = lastBit << (31 - i);
        result |= revLastBit;
        n >>>= 1;
    }
    return result >>> 0
};

// New solution with more familiarity with bit manipulation

var reverseBits = function (n) {
    var res = 0;
    var pos = 31;
    while (n) {
        var cur = n & 1;
        res ^= (cur << pos);
        n = n >>> 1;
        pos--;
    }
    return res >>> 0;
};
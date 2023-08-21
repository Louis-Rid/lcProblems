// how does line 12 reverse the bits?

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
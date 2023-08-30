var maxSubArray = function (nums) {
    var n = nums.length;
    var lm = 0;
    var gm = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < n; i++) {
        lm = Math.max(nums[i], nums[i] + lm)
        if (lm > gm) gm = lm
    }
    return gm;
};
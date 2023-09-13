var maxProduct = function (nums) {
    let max = nums[0];
    let min = nums[0];
    let globalMax = nums[0];

    for (let i = 1; i < nums.length; i++) {
        console.log(min, max)
        let temp = Math.max(nums[i], nums[i] * max, nums[i] * min);
        min = Math.min(nums[i], nums[i] * max, nums[i] * min);
        max = temp;
        if (globalMax < max) globalMax = max;
    }
    console.log(min, max)
    return globalMax;
};
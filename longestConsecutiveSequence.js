var longestConsecutive = function (nums) {
    if (!nums.length) return 0;
    if (nums.length === 1) return 1;
    var count = 0;
    var seq = new Set(nums);
    var visited = new Set();

    for (let i = 0; i < nums.length; i++) {
        var cur = nums[i]
        var temp = 0;
        if (!seq.has(cur - 1)) {
            while (seq.has(cur) && !visited.has(cur)) {
                visited.add(cur)
                cur++;
                temp++;
            }
        }

        count = Math.max(count, temp);
    }


    return count;
};
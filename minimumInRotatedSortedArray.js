var findMin = function (nums) {
    if (nums.length === 1) return nums[0];
    var low = 0;
    var high = nums.length - 1;
    var mid = Math.floor((high + low) / 2);
    var min = nums[mid];
    while (true) {
        if (min > nums[mid + 1]) return nums[mid + 1];
        else if (min < nums[mid - 1] || nums[mid - 1] == undefined) return min;
        else if (min < nums[high]) {
            high = mid;
            mid = Math.floor((high + low) / 2);
            min = nums[mid];
        } else if (min > nums[high]) {
            low = mid;
            mid = Math.floor((high + low) / 2);
            min = nums[mid];
        }
    }
};
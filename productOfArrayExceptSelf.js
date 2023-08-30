var productExceptSelf = function (nums) {
    var arr = new Array(nums.length);
    var i = 1;
    var j = nums.length - 2;
    var left = nums[0];
    var right = nums[nums.length - 1];
    while (i < nums.length) {
        arr[i] = arr[i] !== undefined ? (arr[i] * left) : left;
        arr[j] = arr[j] !== undefined ? (arr[j] * right) : right;
        left *= nums[i];
        right *= nums[j];
        i++;
        j--;
    }
    return arr;
};
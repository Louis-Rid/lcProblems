var threeSum = function (nums) {
    var arr = nums.sort((a, b) => a - b);
    var res = [];
    console.log(arr)

    // Search for triplets
    for (let i = 0; i < arr.length; i++) {
        var j = i + 1;
        var k = arr.length - 1;
        var target = -arr[i]

        while (j < k) {
            var temp = arr[j] + arr[k];
            if (temp === target) {
                res.push([arr[i], arr[j], arr[k]]);
                while (arr[j] === arr[j + 1]) j++;
                while (arr[k] === arr[k - 1]) k--;
                j++;
                k--;
            }
            else if (temp > target) k--;
            else j++;
        }
        while (arr[i] == arr[i + 1] && i < arr.length) i++;
    }

    return res;
};
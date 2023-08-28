// My solution

var canJump = function (nums) {
    var dp = new Array(nums.length).fill(0) // This is a history of how far we have jumped
    var pos = 0; // This shows the current position we have jumped to in the array
    var st = [0]; // This is a stack to remember where we have been in the jumping process

    do {
        if (pos === nums.length - 1) return true;
        if (nums[pos] === dp[pos]) {
            pos = st.pop();
        } else {
            dp[pos]++;
            st.push(pos);
            pos += dp[pos];
        }

    } while (st.length)

    return false;
};

// Optomized solution

var canJump = function (nums) {
    var goal = nums.length - 1;

    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] + i >= goal) goal = i;
        if (!goal) return true;
    }

    return false;
};
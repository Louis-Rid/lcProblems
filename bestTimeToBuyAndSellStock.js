// How is this problem a sliding window problem?

var maxProfit = function (prices) {
    if (prices.length === 1) return 0
    var buy = prices[0]
    var profit = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < buy) buy = prices[i];
        else if (prices[i] - buy > profit) profit = prices[i] - buy;
    }
    return profit;
};
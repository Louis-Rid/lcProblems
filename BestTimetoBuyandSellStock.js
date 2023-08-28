var maxProfit = function(prices) {
    var lowPrice = prices[0];
    var profit = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < lowPrice) lowPrice = prices[i];
        else if (prices[i] - lowPrice > profit) profit = prices[i] - lowPrice;
    }

    return profit;
};

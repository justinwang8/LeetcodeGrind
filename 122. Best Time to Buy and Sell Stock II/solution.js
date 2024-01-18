/**
 * @param {number[]} prices
 * @return {number}
 */

//Time: O(n)
//Space: O(1)

var maxProfit = function(prices) {
    let left = 0;
    let right = 1;
    let maxProfit = 0;

    while(right < prices.length){
        if(prices[right] < prices[left]){
            left = right;
        }

        right++;

        if(prices[right] < prices[right - 1]) {
            maxProfit += prices[right - 1] - prices[left];
            left = right;
        }
    }

    if(prices[right - 1] > prices[left]) maxProfit += prices[right - 1] - prices[left];

    return maxProfit;
    
};
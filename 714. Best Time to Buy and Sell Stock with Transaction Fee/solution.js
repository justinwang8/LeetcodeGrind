/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */

//Time: O(n)
//Space: O(n)

var maxProfit = function(prices, fee) {
    let hold = [];
    let sell = [];
  
    hold[0] = prices[0] * -1;
    sell[0] = 0;
  
    for(let i = 1; i < prices.length; i++){
      hold[i] = Math.max(hold[i - 1], sell[i - 1] - prices[i]);
      sell[i] = Math.max(sell[i - 1], hold[i - 1] + prices[i] - fee);
    }
  
    return sell[sell.length - 1];
  };
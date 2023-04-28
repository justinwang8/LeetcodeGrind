/**
 * @param {number[]} prices
 * @return {number}
 */

//Time: O(n)
//Space: O(1)

var maxProfit = function(prices) {
    let maxProfit = 0;
    let leftPointer = 0;
    let rightPointer = 1;

    while(rightPointer < prices.length){
        if(prices[leftPointer] > prices[rightPointer]){
            leftPointer = rightPointer;
        } else {
            if(prices[rightPointer] - prices[leftPointer] > maxProfit)
                maxProfit = prices[rightPointer] - prices[leftPointer];
        }

        rightPointer++;
    }
    
    return maxProfit;
};
/**
 * @param {number} n
 * @return {number}
 */

//Time: O(n)
//Space: O(n)

var climbStairs = function(n) {
    if(n <= 2)
        return n;

    
    let valueArray = [];

    valueArray[0] = 1;
    valueArray[1] = 1;

    for(let i = 2; i <= n; i++){
        valueArray.push(valueArray[i - 1] + valueArray[i - 2]);
    }

    return valueArray[n];

}; 
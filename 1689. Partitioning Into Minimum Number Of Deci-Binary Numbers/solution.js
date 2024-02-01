/**
 * @param {string} n
 * @return {number}
 */

//Time: O(n)
//Space: O(1)

var minPartitions = function(n) {
    n = n.split("");
    let max = 0;

    for(let element of n){
        if(parseInt(element) > max){
            max = parseInt(element);
        }
    }

    return max
};
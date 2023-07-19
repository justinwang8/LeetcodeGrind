/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */

//Time: O(n)
//Space: O(n)

var kthFactor = function(n, k) {
    let array = [];

    for(let i = n; i >= 1; i--){
        if(n % i == 0) array.splice(0, 0, i);
    }

    if(k > array.length) return -1;

    return array[k - 1];
    
};
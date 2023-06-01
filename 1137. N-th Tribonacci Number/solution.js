/**
 * @param {number} n
 * @return {number}
 */

//Time: O(n)
//Space: O(n)

var tribonacci = function(n) {
    //0, 1, 1, 2, 4, 7, 13, 24

    if (n == 0) return 0;
    if (n < 3) return 1;

    let array = [0, 1, 1];

    for(let i = 3; i <= n; i++){
        array[i] = array[i - 1] + array[i - 2] + array[i - 3];  

    }

    return array[n];

};
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */

//Time: O(10^k)
//Space: ???

var combinationSum3 = function(k, n) {
    let globArray = [];

    function dfs(start, sum, array){
        if(array.length > k) return;

        if(sum == n && array.length == k) globArray.push(array);

        for(let i = start; i < 10; i++){
            dfs(i + 1, sum + i, [...array, i]);
        }
    }

    dfs(1, 0, []);

    return globArray;
};
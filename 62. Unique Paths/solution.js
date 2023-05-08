/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

//Time: O(m * n), m = # of rows, n = # of cols
//Space: O(m * n), m = # of rows, n = # of cols

var uniquePaths = function(m, n) {

    let array = [];

    for(let i = 0; i < m; i++){
        let innerArray = [];
        for(let j = 0; j < n; j++){
            if(i == (m - 1) || j == (n - 1))
                innerArray.push(1);
            else
                innerArray.push(0);
        }
        array.push(innerArray);
    }

    for(let i = (m - 2); i >= 0; i--){
        for(let j = (n - 2); j >= 0; j--){
            array[i][j] = array[i + 1][j] + array[i][j + 1];
        }
    }

    return array[0][0];
};
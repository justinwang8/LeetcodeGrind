/**
 * @param {number[][]} grid
 * @return {number}
 */

//Time: O(m*n)
//Space: O(n)

var equalPairs = function(grid) {
    let map = {};
    let numPairs = 0;

    for(let element of grid){
        if(!map[element]) map[element] = 1;
        else map[element] += 1;
    }

    for(let i = 0; i < grid[0].length; i++){
        let colMap = [];

        for(let j = 0; j < grid.length; j++){
            colMap.push(grid[j][i]);
        }

        if(map[colMap]){
            numPairs += map[colMap];
        }
    }

    return numPairs;    
};
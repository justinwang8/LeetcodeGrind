/**
 * @param {number[][]} grid
 * @return {number}
 */

//Time: O(n)
//sapce: O(n)

var maxIncreaseKeepingSkyline = function(grid) {
    let rowMax = [];
    let colMax = [];
    let totalIncrease = 0;

    for(let i = 0; i < grid.length; i++){
        let max = 0;

        for(let j = 0; j < grid.length; j++){
            if(grid[i][j] > max) max = grid[i][j];
        }

        rowMax.push(max);
    }

    for(let i = 0; i < grid.length; i++){
        let max = 0;

        for(let j = 0; j < grid.length; j++){
            if(grid[j][i] > max) max = grid[j][i];
        }

        colMax.push(max);
    }

    for(let i = 0; i < grid.length; i++){
        
        for(let j = 0; j < grid.length; j++){
            if(grid[i][j] < Math.min(rowMax[i], colMax[j])) totalIncrease += (Math.min(rowMax[i], colMax[j]) - grid[i][j])
        }
    }

    return totalIncrease;
    
};
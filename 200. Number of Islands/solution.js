/**
 * @param {character[][]} grid
 * @return {number}
 */

 //Approach
 //1. Visit each index on the grid
 //2. Increment islandCount
 //3. If island index is found, flood the entire island with 0s

 //Time: O(m*n), m=#ofrows, n=#ofcols
 //Space: O(1)

 var numIslands = function(grid) {
    let numIslands = 0;

    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[0].length; j++){
            if(grid[i][j] == "1"){
                numIslands++;
                flood(grid, i, j);
            }
        }
    }

    return numIslands;
    
};

let flood = function(grid, row, col) {
    if(row < 0 || row >= grid.length || col < 0 || col >= grid[0].length ) return;
    if(grid[row][col] == 0) return;

    grid[row][col] = 0;

    flood(grid, row - 1, col);
    flood(grid, row + 1, col);
    flood(grid, row, col - 1);
    flood(grid, row, col + 1);

}
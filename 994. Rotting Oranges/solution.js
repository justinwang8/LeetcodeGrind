/**
 * @param {number[][]} grid
 * @return {number}
 */

//Time: O(n)
//Space: O(n)

var orangesRotting = function(grid) {
    let numRows = grid.length;
    let numCols = grid[0].length;
    let queue = [];
    let numOnes = 0;
    let max = 0;
    let directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    for(let i = 0; i < numRows; i++){
        for(let j = 0; j < numCols; j++){
            if(grid[i][j] == 2){
                queue.push([[i, j], 0]);
                grid[i][j] = 'X';
            } else if(grid[i][j] == 1) numOnes++;
        }
    }

    while(queue.length > 0){
        let [position, steps] = queue.shift();

        for(let step of directions){
            let x = step[0] + position[0];
            let y = step[1] + position[1];

            if(x < 0 || y < 0 || x >= numRows || y >= numCols || grid[x][y] == 'X'){}
            else if(grid[x][y] == 1){
                grid[x][y] = 'X';
                numOnes--;
                if(steps + 1 > max) max = steps + 1;
                queue.push([[x, y], steps + 1]);
            }

        }
    }

    if(numOnes !== 0) return -1;

    return max;
};
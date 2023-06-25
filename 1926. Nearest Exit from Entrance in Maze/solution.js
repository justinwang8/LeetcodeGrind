/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */

//Time: ???
//Space: ???

var nearestExit = function(maze, entrance) {
    let numRows = maze.length;
    let numCols = maze[0].length;

    if(numRows == 0 || numCols == 0) return -1;

    let directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    let queue = [[entrance, 0]]; 
    maze[entrance[0]][entrance[1]] = '+';

    while(queue.length > 0){
        let [position, steps] = queue.shift();
        steps++;

        for(let step of directions){
            let x = position[0] + step[0];
            let y = position[1] + step[1];

            if(x < 0 || y < 0 || x >= numRows || y >= numCols || maze[x][y] == '+'){}
            else if(x == 0 || y == 0 || x == numRows - 1 || y == numCols - 1){
                return steps;
            } else {
                maze[x][y] = '+';
                queue.push([[x, y], steps]);
            }
        
        }
    }

    return -1;
};

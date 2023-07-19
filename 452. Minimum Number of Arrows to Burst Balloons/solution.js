/**
 * @param {number[][]} points
 * @return {number}
 */

//Time: O(nlogn)
//Space: O(1)

var findMinArrowShots = function(points) {
    points.sort((a, b) => a[1] - b[1]);
    let numArrows = 0;

    let current = points[0][1];
    numArrows++;

    for(let i = 0; i < points.length; i++){
        if(points[i][0] <= current){}
        else {
            current = points[i][1];
            numArrows++;
        }
    }

    return numArrows;
    
};
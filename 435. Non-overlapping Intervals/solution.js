/**
 * @param {number[][]} intervals
 * @return {number}
 */

//Time: O(nlogn)
//Space: O(1)

var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a, b) => a[1] - b[1]);

    let previous = intervals[0];
    let total = 0;

    for(let i = 1; i < intervals.length; i++){
        let current = intervals[i];
        if(current[0] < previous[1]) total++;
        else previous = intervals[i];
    }

    return total;
}
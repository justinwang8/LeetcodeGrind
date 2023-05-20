/**
 * @param {number[]} gain
 * @return {number}
 */

//Time: O(n)
//Space: O(1)

var largestAltitude = function(gain) {
    let sum = 0;
    let highest = 0

    for(let i = 0; i < gain.length; i++){
        sum += gain[i];
        if(sum > highest) highest = sum;
    }

    return highest;
};
/**
 * @param {number[]} nums
 * @return {boolean}
 */

//Time: O(n)
//Space: O(1)

var increasingTriplet = function(nums) {
    let first = Infinity; //1
    let second = Infinity; //2

    for(let num of nums){
        if(num <= first) first = num;
        else if(num > first && num <= second) second = num;
        else return true;
    }

    return false;
};
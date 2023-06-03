/**
 * @param {number[]} nums
 * @return {number}
 */

//Time: O(n)
//Space: O(1)

var singleNumber = function(nums) {
    let uniqueNumber = 0;

    for(let i = 0; i < nums.length; i++){
        uniqueNumber = uniqueNumber ^ nums[i];
    }

    return uniqueNumber;
};
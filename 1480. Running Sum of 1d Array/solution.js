/**
 * @param {number[]} nums
 * @return {number[]}
 */

//Time: O(n)
//Space: O(n)

var runningSum = function(nums) {
    let newArray = [];
    let totalSum = 0;

    for(let i = 0; i < nums.length; i++){
        totalSum += nums[i];
        newArray.push(totalSum);
    }



    return newArray;
    
};
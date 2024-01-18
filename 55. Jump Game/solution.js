/**
 * @param {number[]} nums
 * @return {boolean}
 */

//Time: O(n)
//Space: O(1)

var canJump = function(nums) {
    if(nums.length <= 1) return true;

    let maximum = nums[0];

    for(let i = 0; i < nums.length; i++){
        if(i >= maximum && nums[i] == 0) return false;
        
        if(nums[i] + i > maximum) maximum = nums[i] + i;

        if(maximum >= nums.length - 1) return true;


    }

    return false;

};
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

//Time: O(n^2)
//Space: O(1)

var removeElement = function(nums, val) {

    let numCount = nums.length

    for(let i = 0; i < nums.length; i++){
        if(nums[i] == val){
            nums.splice(i, 1);
            while(nums[i] == val){
                nums.splice(i, 1);
            }
        }
    }

    return nums.length;
    
};
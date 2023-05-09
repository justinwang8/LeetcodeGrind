/**
 * @param {number[]} nums
 * @return {number}
 */

//Time: O(n^2)
//Space: O(1)

var removeDuplicates = function(nums) {
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == nums[i + 1]){
            let nextIndex = i + 1;
            while(nums[i] == nums[nextIndex]){
                nums.splice(nextIndex, 1);
            }
        }
    }

    return nums.length;
    
};
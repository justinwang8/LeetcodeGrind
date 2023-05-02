/**
 * @param {number[]} nums
 * @return {number}
 */

//Time: O(n^2)
//Space: O(1)

var pivotIndex = function(nums) {
    for(let i = 0; i < nums.length; i++){
        let leftSum = 0;
        let rightSum = 0;
        for(let j = 0; j < nums.length; j++){
            if(j < i){
                leftSum += nums[j];
            } else if (j > i){
                rightSum += nums[j];
            }
        }

        if(leftSum == rightSum)
            return i;
    }

    return -1;
    
};
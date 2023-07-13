/**
 * @param {number[]} nums
 * @return {number}
 */

//Time: O(n)
//Space: O(1)

var longestSubarray = function(nums) {
    let lower = 0;
    let upper = 0;
    let numZeroes = 0;
    let numOnes = 0;
    let max = 0;

    while(upper < nums.length){
        if(nums[upper] == 0){
            numZeroes++;
        } else if(nums[upper] == 1){
            numOnes++;
        }


        if(numZeroes > 1){
            if(nums[lower] == 0) numZeroes--;
            else numOnes--;
            lower++;
        } else if(numZeroes == 1){
            if(numOnes > max) max = numOnes;
        } else {
            if(numOnes - 1 > max) max = numOnes - 1;
        }

        upper++;
    }   

    return max;
};
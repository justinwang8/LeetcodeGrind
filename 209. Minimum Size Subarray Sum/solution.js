/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */

//Time: O(n)
//Space: O(1)

var minSubArrayLen = function(target, nums) {
    let left = 0;
    let right = 0;
    let minimalLength = Infinity;
    let sum = nums[0];


    while(left < nums.length && right < nums.length){
        if(sum < target){
            right++;
            sum += nums[right];
        } else {
            if(minimalLength > (right - left + 1)) minimalLength = right - left + 1;
            sum -= nums[left];
            left++;
        }
    }

    if(minimalLength == Infinity) return 0;

    return minimalLength;
    
};
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

//Time: O(nlogn)
//Space: O(1)

var maxOperations = function(nums, k) {
    let left = 0;
    let right = nums.length - 1;
    let numOperations = 0;

    nums.sort((a, b) => a - b);

    while(left < right){
        if(nums[left] + nums[right] == k){
            numOperations++;
            left++;
            right--;
        } else if(nums[left] + nums[right] < k){
            left++;
        } else {
            right--;
        }
    }

    return numOperations;
    
};
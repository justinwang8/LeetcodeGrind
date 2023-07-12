/**
 * @param {number[]} nums
 * @return {number}
 */

//Time: O(logn)
//Space: O(1)

var findPeakElement = function(nums) {
    let lower = 0;
    let upper = nums.length - 1;
    let middle = Math.floor((upper + lower) / 2);

    if(upper - lower == 0) return 0;

    while(1){
        if((upper - lower) == 1){
            if(nums[upper] > nums[lower]) return upper;
            return lower;
        }

        if(nums[middle] < nums[middle - 1]) upper = middle; 
        else if(nums[middle] < nums[middle + 1]) lower = middle;
        else if(nums[middle] > nums[middle + 1] && nums[middle] > nums[middle - 1]) return middle;

        middle = Math.floor((upper + lower) / 2);
    }
    
};


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

//Time: O(n)
//Space: O(1)

var moveZeroes = function(nums) {

    if(nums.length == 0) return nums;

    let smallPointer = 0;
    let bigPointer = 1;

    while(bigPointer < nums.length){
        if(nums[smallPointer] !== 0){
            smallPointer++;
            bigPointer++;
        } else {
            if(nums[bigPointer] !== 0){
                let temp = nums[bigPointer];
                nums[bigPointer] = nums[smallPointer];
                nums[smallPointer] = temp;
                smallPointer++;
            } 
            
            bigPointer++;
        }
    }

    return nums;
}
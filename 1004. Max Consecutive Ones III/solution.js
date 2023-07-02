/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

//Time: O(n)
//Space: O(1)

var longestOnes = function(nums, k) {
    let leftPointer = 0;
    let rightPointer = 0;
    let numZeroes = 0;
    let numOnes = 0;
    let max = 0;

    function increment(num){
        if(num == 0) numZeroes++;
        else numOnes++;
    }

    function decrement(num){
        if(num == 0) numZeroes--;
        else numOnes--;
    }

    while(numZeroes < k && rightPointer < nums.length){
        increment(nums[rightPointer]);
        rightPointer++;
    }

    if(rightPointer == nums.length) return rightPointer;

    rightPointer--;

    while(rightPointer < nums.length){
        if(numZeroes == k) max = (rightPointer - leftPointer) + 1;
        
        if(numZeroes > k){
            decrement(nums[leftPointer]);
            leftPointer++;
        }

        rightPointer++;
        increment(nums[rightPointer]);
    } 

    return max;
    
};
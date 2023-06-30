/**
 * @param {number[]} nums
 * @return {number[]}
 */

//Time: O(n)
//Space: O(n)

var productExceptSelf = function(nums) {
    let leftArray = [];
    let rightArray = [];
    let outputArray = [];

    leftArray[0] = nums[0];
    rightArray[nums.length - 1] = nums[nums.length - 1];

    for(let i = 1; i < nums.length; i++){
        leftArray[i] = nums[i] * leftArray[i - 1];
    }

    for(let i = nums.length - 2; i >= 0; i--){
        rightArray[i] = nums[i] * rightArray[i + 1];

    }

    for(let i = 0; i < nums.length; i++){
        if(i == 0){
            outputArray.push(rightArray[i + 1]);
        } else if(i == nums.length - 1){
            outputArray.push(leftArray[i - 1]);
        } else {
            outputArray.push(leftArray[i - 1] * rightArray[i + 1]);
        }
    }

    return outputArray;
};
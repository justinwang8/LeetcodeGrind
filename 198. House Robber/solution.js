/**
 * @param {number[]} nums
 * @return {number}
 */

//Time: O(n)
//Space: O(n)

var rob = function(nums) {
    let cumArray = [];

    if(nums.length < 2) return nums[0];

    cumArray[0] = nums[0];
    cumArray[1] = Math.max(nums[1], nums[0]);

    for(let i = 2; i < nums.length; i++){
        let newElement = Math.max(nums[i] + cumArray[i - 2], cumArray[i - 1]);
        cumArray.push(newElement);
    }

    return cumArray[cumArray.length - 1];
    
};
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//Time: O(n^2)
//Space: O(1)

var twoSum = function(nums, target) {
    let finalArray = [];
    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j < nums.length; j++){
            if(i !== j){
                if(nums[i] + nums[j] == target){
                    finalArray.push(i);
                    finalArray.push(j);
                    return finalArray;
                }
            }
        }
    }
    
    return finalArray;
};
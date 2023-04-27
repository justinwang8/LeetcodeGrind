/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

//Time: O(log n)
//Space: O(1)

var search = function(nums, target) {
    let length = nums.length; 
    let middleIndex = Math.floor(length / 2); 
    let lowerIndex = 0;
    let upperIndex = length - 1; 

    if(length == 1){
        if(nums[0] == target)
            return 0;
        else
            return -1;
    }

    if(target == nums[middleIndex]){
        return middleIndex;     
    }
        
    while((target != nums[middleIndex])){

        if(target > nums[middleIndex]){
            lowerIndex = middleIndex;
        }

        if(target < nums[middleIndex]) {
            upperIndex = middleIndex;
        }

        if((upperIndex - lowerIndex) == 1){
            if(target == nums[lowerIndex])
                return lowerIndex;
            else if(target == nums[upperIndex])
                return upperIndex;
            else
                return -1;
        }

        middleIndex = Math.floor((lowerIndex + upperIndex) / 2);

        if(target == nums[middleIndex]){
            return middleIndex;
        }

    }

    
};
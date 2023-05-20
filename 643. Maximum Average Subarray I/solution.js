/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

//Time: O(n)
//Space: O(1)

var findMaxAverage = function(nums, k) {
    let maximumAverage = 0;
    let average = 0;
    let lower = 0;
    let upper = 0;
    let sum = 0;

    while(upper !== k){
        sum += nums[upper];
        upper++;
    }

    upper--;

    maximumAverage = (sum) / k;

    while(upper < (nums.length - 1)){
        lower++;
        upper++;
        sum -= nums[lower - 1];
        sum += nums[upper];

        average = (sum / k);

        if(average > maximumAverage)
            maximumAverage = average;

    }

    return maximumAverage;
};
/**
 * @param {number[]} height
 * @return {number}
 */

//Time: O(n)
//Space: O(1)

var maxArea = function(height) {
    let start = 0;
    let end = height.length - 1;
    let maxWater = 0;

    while(end - start > 0){
        let water = Math.min(height[start], height[end]) * (end - start);

        if(water > maxWater) maxWater = water;

        if(height[start] < height[end])
            start++;
        else
            end--;
    }

    return maxWater;
    
};
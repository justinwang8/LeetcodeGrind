/**
 * @param {number[]} nums
 * @return {number}
 */

//Time: O(n)
//Space: O(1)

var jump = function(nums) {
    if(nums.length <= 1) return 0;

    let numJumps = 0;
    let maxJump = 0;
    let lastJumpIndex = 0;


    for(let i = 0; i < nums.length; i++){
        maxJump = Math.max(nums[i] + i, maxJump);

        if(i == lastJumpIndex){
            lastJumpIndex = maxJump;

            numJumps++;

            if(lastJumpIndex >= nums.length - 1) return numJumps;

        }


    }

};


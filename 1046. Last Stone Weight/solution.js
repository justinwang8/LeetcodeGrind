/**
 * @param {number[]} stones
 * @return {number}
 */

//Time: O(n), if we assume sort() is O(1)
//Space: O(1)

var lastStoneWeight = function(stones) {
    
    stones.sort((a, b) => a - b);

    while(stones.length > 1){
        if(stones[stones.length - 1] == stones[stones.length - 2]){
            stones.splice(stones.length - 2, 2);
        } else {
            stones[stones.length - 1] = stones[stones.length - 1] - stones[stones.length - 2];
            stones.splice(stones.length - 2, 1);
        }

        stones.sort((a, b) => a - b);
    }

    if(stones.length == 1)
        return stones[0];
    else
        return 0;
    
};
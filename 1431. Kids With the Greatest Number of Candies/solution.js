/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */

//Time: O(n)
//Space: O(n)

var kidsWithCandies = function(candies, extraCandies) {
    let mostCandies = 0;
    let outputArray = [];

    for(let element of candies){
        if(element > mostCandies) mostCandies = element;
    }

    for(let i = 0; i < candies.length; i++){
        candies[i] + extraCandies >= mostCandies ? outputArray[i] = true : outputArray[i] = false;
    }

    return outputArray;
    
};
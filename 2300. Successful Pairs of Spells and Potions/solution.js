/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */

//Time: O(nlogn)
//Space: O(n)

var successfulPairs = function(spells, potions, success) {
    let outputArray = [];
    let sortedPotions = potions.sort((a, b) => {return a - b});

    for(let element of spells) {
        if(success > element * potions[sortedPotions.length - 1]) {
            outputArray.push(0);
        } else if(success <= element * sortedPotions[0]){
            outputArray.push(sortedPotions.length);
        } else {
            let index = binarySearch(element, sortedPotions, success);
            console.log(index);
            outputArray.push(potions.length - index);
        }
    }

    return outputArray;
    
};

function binarySearch(spell, potions, success) {
    let middleIndex = Math.floor(potions.length / 2);
    let startIndex = 0;
    let endIndex = potions.length - 1;

    while(1){
        if(spell * potions[middleIndex] >= success) {
            endIndex = middleIndex;
        } else if(spell * potions[middleIndex] < success){
            startIndex = middleIndex;
        } 

        if(endIndex - startIndex == 1){
            if(spell * potions[endIndex] >= success) return endIndex;
            return startIndex;
        }

        middleIndex = Math.floor((startIndex + endIndex) / 2);
    }
}
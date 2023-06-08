/**
 * @param {number[]} arr
 * @return {boolean}
 */

//Time: O(nlogn)
//Space: O(n)

var uniqueOccurrences = function(arr) {
    let map = {};
    let occurrences = [];

    for(let element of arr){
        if(!map[element])
            map[element] = 1;
        else
            map[element] += 1;
    }

    for(let key in map){
        occurrences.push(map[key]);
    }

    occurrences.sort();

    for(let i = 0; i < occurrences.length - 1; i++){
        if(occurrences[i] == occurrences[i + 1]) return false;
    }

    return true;
};
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */

//Time: O(n)
//Space: O(n)

var mergeAlternately = function(word1, word2) {
    let minSize = Math.min(word1.length, word2.length);
    let word1Array = word1.split("");
    let word2Array = word2.split("");
    let finalArray = [];

    for(let i = 0; i < minSize; i++){
        finalArray.push(word1Array.shift());
        finalArray.push(word2Array.shift());
    }

    let remainingArray = word1Array.length > 0 ? word1Array : word2Array;

    for(let element of remainingArray)
        finalArray.push(element);
    

    return finalArray.join("");
};
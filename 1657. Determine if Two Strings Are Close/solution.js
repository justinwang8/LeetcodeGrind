/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */

//Time: O(nlogn)
//Space: O(n)

var closeStrings = function(word1, word2) {
    let map1 = {};
    let map2 = {};
    let map1Array;
    let map2Array;

    let word1split = word1.split("");
    let word2split = word2.split("");

    for(let char of word1split){
        if(!map1[char]) map1[char] = 1;
        else map1[char]++;
    }

    for(let char of word2split){
        if(!map2[char]) map2[char] = 1;
        else map2[char]++;
    }

    map1Array = Object.entries(map1);
    map2Array = Object.entries(map2);

    map1Array.sort((a, b) => a[1] - b[1]);
    map2Array.sort((a, b) => a[1] - b[1]);

    if(map1Array.length !== map2Array.length) return false;

    for(let i = 0; i < map1Array.length; i++){
        if(map1Array[i][1] !== map2Array[i][1] || !map2[map1Array[i][0]]) return false;
    }

    return true;
};
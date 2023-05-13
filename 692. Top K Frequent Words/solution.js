/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */

//O(n), assuming sort() is constant O(1)
//O(n)

var topKFrequent = function(words, k) {
    let map = {};
    let outputArray = [];

    for(let element of words)
        map[element] ? map[element] += 1 : map[element] = 1;

    let newMap = Object.entries(map);
    newMap.sort((a, b) => b[1] - a[1] );
    newMap.sort((a, b) => {
        if(a[1] == b[1])
           return a[0].localeCompare(b[0]); // a, b => -1

    })

    for(let key of newMap){
        outputArray.push(key[0]);
        if(outputArray.length == k)
            return outputArray;
    }

};
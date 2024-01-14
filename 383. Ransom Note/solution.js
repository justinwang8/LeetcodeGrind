/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

//Time: O(n)
//Space: O(n)

var canConstruct = function(ransomNote, magazine) {
    ransomNote = ransomNote.split("");
    magazine = magazine.split("");

    let map = {};

    for(element of ransomNote){
        if(map[element]){
            map[element]++;
        } else {
            map[element] = 1;
        }
    }

    for(element of magazine){
        if(map[element]){
            map[element]--;
        }
    }

    for(element in map){
        if(map[element] !== 0) return false;
    }

    return true;
    
};
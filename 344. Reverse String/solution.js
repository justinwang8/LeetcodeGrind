/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

//Time: O(n)
//Space: O(1)

var reverseString = function(s) {
    let temp;
    let lastIndex = s.length - 1;

    for(let i = 0; i < s.length / 2; i++){
        let temp = s[i];
        s[i] = s[lastIndex];
        s[lastIndex] = temp;
        lastIndex--;
    }

    return s;
};
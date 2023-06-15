/**
 * @param {string} s
 * @return {string}
 */

//Time: O(n)
//Space: O(n)

var reverseVowels = function(s) {
    let set = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);

    let stack = [];

    sArray = s.split("");

    for(let element of sArray){
        if(set.has(element)) stack.push(element);
    }

    for(let i = 0; i < sArray.length; i++){
        if(set.has(sArray[i]))
            sArray[i] = stack.pop();
    }

    return sArray.join("");
};
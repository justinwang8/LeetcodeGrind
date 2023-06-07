/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

//Time: O(n)
//Space: O(1)

var maxVowels = function(s, k) {
    let vowelSet = new Set(["a", "e", "i", "o", "u"]);
    let count = 0;
    let max = 0;
    let lower = 0;
    let upper = 0;
    
    while(upper < s.length){

        if(vowelSet.has(s.charAt(upper))) count++;

        if((upper - lower) == k){
            if(vowelSet.has(s.charAt(lower))) count--;
            lower++;
        }

        if(count > max) max = count;

        upper++;
    }

    return max;
    
};
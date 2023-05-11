/**
 * @param {string} s
 * @return {number}
 */

//Time: O(n)
//Space: O(n)

var lengthOfLastWord = function(s) {
    let sArray = s.split("");
    let startCounting = false;
    let count = 0;


    for(let i = (sArray.length - 1); i >= 0; i--){
        if(sArray[i] !== " ")
            startCounting = true;
        
        if(startCounting && sArray[i] == " ")
            return count;

        if(startCounting)
            count++;
    
    }

    return count;
    
};
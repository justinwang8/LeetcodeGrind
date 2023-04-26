/**
 * @param {number} x
 * @return {boolean}
 */

//Time: O(n)
//Space: O(n)

var isPalindrome = function(x) {
    
    let newArray = x.toString().split("");
    let lastIndex = newArray.length - 1;
    let isPalindrome = true;
    
    
    for(let i = 0; i < x.toString().length; i++){
        if(newArray[i] !== newArray[lastIndex]){
            isPalindrome = false;
        }
        lastIndex--;
    }
    
    return isPalindrome;
};
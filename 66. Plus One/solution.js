/**
 * @param {number[]} digits
 * @return {number[]}
 */

//Time: O(n)
//Space: O(1)

var plusOne = function(digits) {
    if(digits[digits.length - 1] < 9)
        digits[digits.length - 1] += 1;
    else {
        let currentIndex = digits.length - 1;

        while(digits[currentIndex] == 9){
            digits[currentIndex] = 0;
            if(currentIndex == 0){
                digits.splice(0, 0, 1); // (start, deleteCount, item1, item2, ...)
                return digits;
            }
            currentIndex--;
        }
        
        digits[currentIndex]++;
    }

    return digits;
};
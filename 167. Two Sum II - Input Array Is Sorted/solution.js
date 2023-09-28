/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

//Time: O(n) 
//Space: O(1)

var twoSum = function(numbers, target) {
    let lower = 0;
    let upper = numbers.length - 1;
    let output = [];
    let found = false;

    while(upper !== lower && found == false){
        if(numbers[upper] + numbers[lower] == target){
            output.push(lower + 1);
            output.push(upper + 1);
            found = true;
        } else if(numbers[upper] + numbers[lower] > target){
            upper--;
        } else {
            lower++;
        }
    }

    return output;
    
};
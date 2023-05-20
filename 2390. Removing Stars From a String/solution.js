/**
 * @param {string} s
 * @return {string}
 */

//Time: O(n)
//Space: O(n)

var removeStars = function(s) {
    let sArray = s.split("");
    let stack = [];

    for(let element of sArray){
        if(element == "*")
            stack.pop();
        else
            stack.push(element);
    }

    return stack.join("");
    
};
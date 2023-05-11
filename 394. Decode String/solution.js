/**
 * @param {string} s
 * @return {string}
 */

//Time: 
//Space: 

var decodeString = function(s) {
    let stack = [];

    for(let char of s){
        if(char !== "]"){
            stack.push(char);
        } else {
            let str = "";

            while(stack[stack.length - 1] !== '[')
                str = stack.pop() + str;

            stack.pop();

            let num = "";

            while(Number.isInteger(Number(stack[stack.length - 1])))
                num = stack.pop() + num;

            stack.push(str.repeat(Number(num)));
        }

    }

    return stack.join('');
};
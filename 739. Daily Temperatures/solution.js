/**
 * @param {number[]} temperatures
 * @return {number[]}
 */

//Time: O(n)
//Space: O(n)

var dailyTemperatures = function(temperatures) {
    let resultArray = new Array(temperatures.length).fill(0);
    let monotonicStack = [];

    for(let i = 0; i < temperatures.length; i++){
        while(monotonicStack.length > 0 && temperatures[i] > temperatures[monotonicStack[monotonicStack.length - 1]]){
            let current = monotonicStack.pop();
            let distance = i - current;
            resultArray[current] = distance;
        }

        monotonicStack.push(i);
    }


    return resultArray;
    
};
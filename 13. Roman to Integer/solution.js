/**
 * @param {string} s
 * @return {number}
 */

//Time: O(n)
//Space: O(n)

var romanToInt = function(s) {
    let map = new Map();
    map.set('I', 1);
    map.set('V', 5);
    map.set('X', 10);
    map.set('L', 50);
    map.set('C', 100);
    map.set('D', 500);
    map.set('M', 1000);
    let array = s.toString().split("");
    let number = 0;
    
    console.log(array);

    for(let i = 0; i < array.length; i++){
        if(array[i] == 'I' && (array[i+1] == 'V' || array[i+1] == 'X')){
            number -= 1;
        }
     else if(array[i] == 'X' && (array[i+1] == 'L' || array[i+1] == 'C')){
            number -= 10;
        }
     else if(array[i] == 'C' && (array[i+1] == 'D' ||array[i+1] == 'M')){
            number -= 100;
        }
     else{
            number += map.get(array[i]);   
     }
        console.log(number);
    }
    
    return number;
};
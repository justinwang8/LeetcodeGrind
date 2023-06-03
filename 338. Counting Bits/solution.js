/**
 * @param {number} n
 * @return {number[]}
 */

//Time: O(n^2)
//Space: O(n)

var countBits = function(n) {
    let finalArray = [];

    for(let i = 0; i <= n; i++){
        let binary = toBinary(i);
        console.log(binary);
        let num = countOnes(binary);
        finalArray.push(num);
    }

    return finalArray;
    
    
};

function toBinary(number) {
    return number.toString(2);
}

function countOnes(binary){
    let numOnes = 0;

    for(let char of binary){
        if(char == "1")
            numOnes++;
    }

    return numOnes;

}
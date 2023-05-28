/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */

//Time: O(log n)
//Space: O(1)

var guessNumber = function(n) {
    let lower = 1;
    let choose = Math.floor(n / 2);
    let higher = n;

    if(guess(n) == 0) return n;

    while(guess(choose) !== 0){ 
        console.log(choose);
        if(guess(choose) == 1){
            lower = choose;
        }
        else if(guess(choose) == -1){
            higher = choose;
        }

        choose = Math.floor((lower + higher) / 2)
    }

    return choose;
    
};
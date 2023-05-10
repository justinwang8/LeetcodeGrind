/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */

//Time: O(n)
//Space: O(n)

var getHint = function(secret, guess) {
    let numBulls = 0;
    let numCows = 0;
    let secretMap = {};
    let guessMap = {};

    secret = secret.split("");
    guess = guess.split("");

    for(let i = 0; i < secret.length; i++){
        if(secret[i] == guess[i]){
            numBulls++;
        } else {
            if(!secretMap[secret[i]])
                secretMap[secret[i]] = 1;
            else
                secretMap[secret[i]] += 1;

            if(!guessMap[guess[i]])
                guessMap[guess[i]] = 1;
            else
                guessMap[guess[i]] += 1;
        }
    }

    for(let key in guessMap) {
        if(guessMap[key] && secretMap[key]){
            numCows += Math.min(guessMap[key], secretMap[key]);
        }
    }

    let result = numBulls.toString().concat("A", numCows.toString(), "B");

    return result;
    
};
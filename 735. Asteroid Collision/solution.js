/**
 * @param {number[]} asteroids
 * @return {number[]}
 */

//Time: O(n)
//Space: O(n)

var asteroidCollision = function(asteroids) {
    let stack = [];

    stack.push(asteroids[0]);

    for(let i = 1; i < asteroids.length; i++){
        let stackTop = stack[stack.length - 1]; //-2
        let nextAsteroid = asteroids[i]; //2

        if((stackTop * nextAsteroid > 0) || (stackTop < 0 && nextAsteroid > 0) || stack.length == 0)
            stack.push(nextAsteroid);
        else { //if stack top is positive and next asteroid is negative
            if(Math.abs(nextAsteroid) == stackTop) stack.pop(); //if stack top and asteroid cancel out
            else if(Math.abs(nextAsteroid) > stackTop){
                while(stack[stack.length - 1] > 0 && (Math.abs(nextAsteroid) > stack[stack.length - 1]) && stack.length > 0){
                stack.pop();
                }

                if(Math.abs(nextAsteroid) == stack[stack.length - 1]) stack.pop();
                else if(stack[stack.length - 1] < 0) stack.push(nextAsteroid);
                else if(Math.abs(nextAsteroid) < stack[stack.length - 1]);
                else stack.push(nextAsteroid);
            }

        }
    }

    return stack;
    
};

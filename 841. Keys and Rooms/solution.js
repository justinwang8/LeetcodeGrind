/**
 * @param {number[][]} rooms
 * @return {boolean}
 */

//Time: ???
//Space: O(n)

var canVisitAllRooms = function(rooms) {
    let freeArray = []; 

    for(let i = 0; i < rooms.length; i++){
        freeArray[i] = false; 
    }

    freeArray[0] = true;
    let queue = [rooms[0]]; 

    while(queue.length > 0){
        let room = queue.shift(); 
        for(let element of room){
            if(freeArray[element] == false){ 
                freeArray[element] = true;
                queue.push(rooms[element]);
            }
        }
    }

    for(let element of freeArray){
        if(element == false) return false;
    }

    return true;
    
};
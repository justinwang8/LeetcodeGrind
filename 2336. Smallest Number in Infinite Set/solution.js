//Time: O(n)
//Space: O(n)

var SmallestInfiniteSet = function() {
    this.heap = array = Array.from({ length: 1000 }, (_, index) => index + 1);
    
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function() {
    return this.heap.shift();
};

/** 
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function(num) {
    let count = 0;

    while(count < this.heap.length && this.heap[count] <= num){
        count++;
    }

    if(count == 0 && this.heap[1] > num){
        this.heap.splice(0, 0, num);
    }

    if(this.heap[count - 1] < num){
        this.heap.splice(count, 0, num);
    } 
    
};

/** 
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */
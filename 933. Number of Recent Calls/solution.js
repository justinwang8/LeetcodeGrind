var RecentCounter = function() {
    this.requests = [];
};

/** 
 * @param {number} t
 * @return {number}
 */

//Time: O(n)
//Space: O(n)

RecentCounter.prototype.ping = function(t) {
    let upper = t;
    let lower = t - 3000;
    this.requests.push(t);

    while(this.requests[0] < lower)
        this.requests.shift();

    return this.requests.length;
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

//Time: O(nlogk), n=size of array, k=number of largest elements in heap to keep track of
//Space: O(k), k=number of largest elements in heap to keep track of

var findKthLargest = function(nums, k) {
    let minHeap = new MinHeap();
    for(let num of nums){
        minHeap.add(num);
        if(minHeap.size() > k)
            minHeap.poll();
    }

    return minHeap.peek();
    
};

class MinHeap {
    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }

    peek() {
        return this.heap[0]; //top of heap is at index 0 I guess
    }

    add(value) {
        this.heap.push(value); //push new value onto end of array
        this.bubbleUp(this.heap.length - 1); // bubble it up to its correct place ??
    }

    poll() {
        let min = this.heap[0];
        let last = this.heap.pop();
        if (this.heap.length > 0) { 
            this.heap[0] = last;
            this.bubbleDown(0); //???
        }

        return min;
    }

    swap(i, j) {
        let temp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = temp;
    }

    bubbleUp(index) {
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if(this.heap[parentIndex] > this.heap[index]){
                this.swap(parentIndex, index);
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    bubbleDown(index) {
        while(index < this.heap.length) {
            let smallestChildIndex = index;
            let leftChildIndex = index * 2 + 1;
            let rightChildIndex = index * 2 + 2;

            if(leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallestChildIndex]){
                smallestChildIndex = leftChildIndex;
            }
            if(rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallestChildIndex]){
                smallestChildIndex = rightChildIndex;
            }
            if(smallestChildIndex !== index){
                this.swap(smallestChildIndex, index);
                index = smallestChildIndex;
            } else {
                break;
            }
        }
    }
}
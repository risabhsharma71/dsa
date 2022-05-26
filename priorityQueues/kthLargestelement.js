var findKthLargest = function(nums, k) {
  // heapify input array in place
  const heap = new Heap(nums);
  
  // remove max from heap k-1 times
  for (let i = 1; i < k; i++) {
    heap.remove();
  }
  
  // remove one more (kth) element and return it
  return heap.remove();
};

class Heap {
  constructor(array) {
    this.heap = array;
    this.heapify();
  }
  
  heapify() {
    const firstParent = Math.floor((this.heap.length - 2) / 2);
    for (let i = firstParent; i >= 0; i--) {
      this.siftDown(i);
    }
  }
  
  remove() {
    const arr = this.heap;
    this.swap(0, this.heap.length - 1);
    const min = this.heap.pop();
    this.siftDown(0);
    return min;
  }
  
  siftDown(i) {
    let childIdx = this.getMinChildIdx(i);
    while (childIdx < this.heap.length && this.heap[childIdx] > this.heap[i]) {
      this.swap(i, childIdx);
      i = childIdx;
      childIdx = this.getMinChildIdx(i);
    }
  }
  
  getMinChildIdx(i) {
    const left = 2*i+1;
    const right = 2*i+2;
    if (this.heap[right] === undefined || this.heap[left] > this.heap[right])
      return left;
    else
      return right;
  }
  
  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
}
let arr =[1,2,3,4,5,6,7,8,9]
console.log(findKthLargest(arr,4))
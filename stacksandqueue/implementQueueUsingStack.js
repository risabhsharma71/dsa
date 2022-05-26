class Queue {
    constructor() {
        this.pushStack = []
        this.popStack = []
    }
    pop() {
        if (this.popStack.length == 0) {
            while (this.pushStack.length) {
                this.popStack.push(this.pushStack.pop())
            }
        }
       return this.popStack.pop()
    }
    push(val) {
        this.pushStack.push(val)
    }


    peek() {
        if (this.popStack.length == 0) {
            while (this.pushStack.length) {
                this.popStack.push(this.pushStack.pop())
            }
        }
        this.popStack[this.popStack - 1]
    }

    empty() {
       return (!this.popStack.length && !this.pushStack.length)
    }

}

const queue = new Queue()
queue.push(10)
queue.push(11)
queue.push(12)
queue.push(13)
queue.push(14)
queue.push(15)

console.log(queue.pop())
console.log(queue.pop())
console.log(queue.empty())
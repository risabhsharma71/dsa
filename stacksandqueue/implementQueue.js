class Queue {
    constructor() {
        this.storage = {}
        this.head = 0
        this.tail = 0
    }
    enqueue(element) {
        this.storage[this.tail] = element
        this.tail++
        return true
    }
    dequeue() {
        let element = this.storage[this.head]
        delete this.storage[this.head]
        this.head++
        return element
    }
}

const queue = new Queue()
queue.enqueue("hello")
queue.enqueue("world")
queue.enqueue("risabh")

console.log(queue)

queue.dequeue()
queue.dequeue()
console.log(queue)


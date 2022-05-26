class Stack {
    constructor() {
        this.storage = {}
        this.size = 0
    }

    push(element) {
       this.size++
        this.storage[this.size] = element
        return true
    }
    pop() {
        let element = this.storage[this.size]
        delete this.storage[this.size]
        this.size--
        return element
    }
    peek() {
        return this.storage[this.size]
    }
}


const stack = new Stack()
stack.push("hi")
stack.push("hie")
stack.push("hiee")
stack.push("hieee")
stack.push("hieeee")

console.log(stack)

stack.pop()
stack.pop()
stack.pop()
console.log(stack)
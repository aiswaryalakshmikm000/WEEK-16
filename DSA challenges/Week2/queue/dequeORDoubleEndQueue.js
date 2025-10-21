// Double-Ended Queue — a data structure that allows insertion and deletion from both the front and the back.

class Deque {
    constructor() {
        this.items = []
    }

    addToFront(element) {
        this.items.unshift(element)
    }

    addToBack(element) {
        this.items.push(element)
    }

    removeFromFront() {
        return this.items.shift()
    }

    removeFromBack() {
        return this.items.pop()
    }

    peekFront() {
        return this.items[0]
    }

    peekBack() {
        return this.items[this.items.length - 1]
    }

    isEmpty() {
        return this.items.length === 0
    }

    size() {
        return this.items.length
    }
}


const deque = new Deque()

deque.addToBack(10)     
deque.addToFront(20)    
deque.addToBack(30)     
deque.removeFromFront()
deque.removeFromBack()  

console.log(deque.items)


class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }
    
    isEmpty(){
        return this.size === 0
    }
    
    getSize(){
        return this.size
    }
    
    prepend(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++
    }
    
    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        } else {
            let prev = this.head
            while (prev.next){
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }
    
    //prepend for head with tail
    prependSec(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        } else {
           node.next = this.head
           this.head = node
        }
        this.size++
    }
    
    //append for head with value
    appendSec(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head =node
            this.tail = node
        } else {
            this.tail.next = node
            this.tail = node 
        }
        this.size++
    }

    //remove from front for head with tail
    removeFromFront(){
        if(this.isEmpty()){
            return null
        } else {
            this.head = this.head.next
        }
        this.size--
    }
    
    
    //remove from end for head with tail 
    removeFromEnd(){
        if(this.isEmpty()){
            return null
        } 
        if(this.size ===1){
            this.head = null
            this.tail = null
        } else {
            let prev = this.head
            while (prev.next && prev.next != this.tail){
                prev =prev.next
            }
            prev.next = null
            this.tail = prev
        }
        this.size--
    }
    
    insert(value, index){
        const node = new Node(value)
        if(index < 0 || index > this.size){
            return 
        }
        if(index === 0){
            this.prepend(value)
        } else {
            let prev = this.head
            for (let i=0; i< index-1; i++){
                prev = prev.next
            }
            node.next = prev.next
            prev.next =node
            this.size++
        }
    }
    
    removeFrom(index){
        if(index < 0 || index >= this.size){
            return
        }
        if(index === 0){
            this.head = this.head.next
        } else {
            let prev = this.head
            for (let i=0; i<index-1; i++){
                prev = prev.next
            } 
            prev.next = prev.next.next
        }
        this.size --
    }
    
    removeValue(value){
        if(this.isEmpty()){
            return null
        } if (this.head.value === value){
            this.head = this.head.next
            this.size--
        } else {
            let prev = this.head
            while(prev.next && prev.next.value !== value){
                prev = prev.next
            }
            if(prev.next){
                prev.next = prev.next.next
            }
            this.size--
        }
    }
    
    search(value){
        if(this.isEmpty()){
            return -1
        } else {
            let i = 0
            let curr = this.head
            while(curr){
                if(curr.value === value){
                    return i
                }
                curr = curr.next
                i++
            }
        }
        return -1
    }
    
    reverse(){
        let prev = null
        let curr = this.head
        while(curr){
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }
    
    print(){
        if(this.isEmpty()){
            console.log("Is Empty ?", this.isEmpty())
        } else {
            let curr = this.head
            let listValues = ''
            while (curr) {
                listValues += `${curr.value} `
                curr = curr.next
            }
            console.log(`List values: ${listValues}, size: ${this.getSize()}`)
        }
    }
}



const link = new LinkedList()
link.print()
link.prependSec(20)
link.appendSec(30)
link.appendSec(50)
link.appendSec(50)
link.print()
link.removeFromFront()
link.print()
link.removeFromEnd()
link.print()

// const link = new LinkedList()
link.print()
link.prepend(50)
link.append(30)
link.insert(60,2)
link.insert(60,0)
link.append(150)
link.print()
link.removeFrom(2)
link.print()
link.removeValue(60)
link.print()
console.log(link.search(30))
link.reverse()
link.print()
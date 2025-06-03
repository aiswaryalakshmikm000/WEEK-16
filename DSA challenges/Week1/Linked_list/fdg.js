// function binarySearch(array, target){
//     let l = 0
//     let r = array.length-1

//     while(left<= right){
//         let middle = Math.floor((left+right)/2)

//         if(target === array[middle]){
//             return middle
//         }

//         if(target < array[middle]){
//             right = middle-1
//         } else {
//             left = middle+1
//         }
//     }
//     return -1
// }

// console.log(binarySearch([1,2,3,4,5], 2))





class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(){
        this.head = null
        this.size = 0
    }

    isEmpty(){
        return this.size ===0
    }

    insert(value, index){
        if(index < 0 || index > this.size){
            return console.log("invalid index")
        }
        const node = new Node(value);
        if(index === 0){
            node.next = this.head
            this.head = node
        } else {
            let prev = this.head
            for (i=0; i<index-1; i++){
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
        }
        return size++
    }

    remove(value){
        if (this.isEmpty()){
            return
        }
        if(this.head.value === value){
            this.head = this.head.next
            this.size-- 
            return
        }

        let prev = this.head
        while(prev.next && prev.next.value != value){
            prev = prev.next
        }

        if (prev.next) {
        prev.next = prev.next.next;
        this.size--;
        }
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
}


const list = new LinkedList()
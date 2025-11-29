//similar logic like the separate chaining

class HashTable{
    constructor(size = 4){
        this.table = new Array(size)
        this.size = size
        this.count = 0 
    }
    hash(key){
        let total = 0
        for(let i=0; i<key.length; i++){
            total += key.charCodeAt(i)
        }
        return total % this.size
    }

    set(key, value){
        let index = this.hash(key)
        let bucket = this.table[index]
        if(!bucket){
           this.table[index] = [[key,value]]
           this.count++
        }else{
            let samekeyitem = bucket.find(item => item[0] === key)
            if(samekeyitem){
                samekeyitem[1] = value
            }else{
                bucket.push([key,value])
                this.count++
            }
        }
        if(this.count / this.size > 0.7){
            this.rehash()
        }
    }

    get(key){
        const index = this.hash(key)
        const bucket = this.table[index]
        if(bucket){
            let samekeyitem = bucket.find(item=>item[0] === key) 
            if(samekeyitem){
                return samekeyitem[1]
            }
        }
    }
    
    remove(key){
        const index = this.hash(key)
        const bucket = this.table[index]
        if(bucket){
            let samekeyitem = bucket.find(item => item[0] === key)
            if(samekeyitem){
               bucket.splice(bucket.indexOf(samekeyitem),1)
               this.count--
               return true
            }
        }
    }

    display(){
        for(let i=0; i<this.table.length; i++){
            if(this.table[i]){
                console.log(this.table[i])
            }
        }
        console.log("size", this.size)
    }

    rehash(){
        const oldtable = this.table
        this.size = this.size*2
        this.table = new Array(this.size)
        this.count = 0
        for(let i=0; i<oldtable.length; i++){
            const bucket = oldtable[i]
            if(bucket){
                for(let j=0; j<bucket.length; j++){
                    const [key,value] = bucket[j]
                    this.set(key,value)
                }
            }
        }
    }
}

const hash = new HashTable(4)

hash.set("name", "rahul")
hash.set("age", "23")
hash.set("gender", "male")
hash.set("single", "yes")
// Here ⚡ Rehashing happens

hash.set("country", "India")
hash.set("America","Going Soon")
hash.display()
//-------------------------------------without collission handling-------------------------------------------

class HashTable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }
    hash(key){
       let total = 0
       for(let i=0; i<key.length; i++){
           total += key.charCodeAt(i)
       }
       return total % this.size
       
    }
    set(key,value){
        const index = this.hash(key)
        this.table[index] = value
    }
    get(key){
        const index = this.hash(key)
        return this.table[index]
    }
    remove(key){
        const index=this.hash(key)
        this.table[index] = undefined
    }
    display(){
        for(let i=0; i<this.table.length; i++){
            if(this.table[i]){
                console.log(i, this.table[i])
            }
        }
    }
}


//============================================by handling collission=============================================

class HashTable {
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }

    hash(key){ //key will be string so convert it to the number
        let total = 0
        for(let i=0; i<key.length; i++){
            total += key.charCodeAt(i)
        }
        return total % this.size
    }

    //insertion o(1)
    set(key, value){
        let index = this.hash(key)
        let bucket = this.table[index]
        
        if(!bucket){
            this.table[index] = [[key, value]] //[key,value] inside the []bucket array
        } else {
            const sameKeyItem = bucket.find(item => item[0] === key)
            if(sameKeyItem){
                sameKeyItem[1] = value
            } else {
                bucket.push([key, value])
            }
        } 
    }

    get(key){
        let index = this.hash(key)
        let bucket = this.table[index]
        if(bucket){
            let sameKeyItem = bucket.find(item => item[0] === key)
            if(sameKeyItem){
                return sameKeyItem[1]
            }
        }
        return undefined
    }

    //deletion o(1)
    remove(key){
        let index = this.hash(key)
        let bucket = this.table[index]
        if(bucket){
            let sameKeyItem= bucket.find(item => item[0] === key)
            if(sameKeyItem){
                bucket.splice(bucket.indexOf(sameKeyItem), 1)
            }
        }
    }

    display(){
        for(let i=0; i<this.table.length; i++){
            if(this.table[i]){
                console.log(i, this.table[i])
            }
        }
    }
}

const table = new HashTable(50)

table.set('name' , "Aishu")
table.set('age' , 28)
table.set('batch' , "BCE@@$")
table.set('mane' , "BCE224")


console.log("-------------------------------")
table.display()
console.log(table.get("name"))
table.set('name' , "Deepu")

console.log("-------------------------------")
table.remove('age')
table.display()
class QuadraticProbing{
    constructor(size){
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

    set(key,value){
        let index = this.hash(key)
        let i = 1
        while(this.table[index] !== undefined && this.table[index][0] !== key){
            index = (index + i*i) % this.size
            i++
        }
        this.table[index] = [key,value]
        this.count++
        
        if(this.count / this.size > 0.7){
            this.rehash()
        }
    }

    get(key){
        let index = this.hash(key)
        let i = 1
        while(this.table[index] !== undefined){
            if(this.table[index][0] === key){
                return this.table[index][1]
            }
            index = (index + i*i) % this.size
            i++
        }
        return undefined
    }
     
    remove(key){
        let index = this.hash(key)
        let i = 1
        while(this.table[index] !== undefined){
            if(this.table[index][0] === key){
               this.table[index] = undefined
               this.count--
               return
            }
            index=(index + i*i) % this.size
            i++
        }
    }
     
    display(){
        for(let i=0; i<this.table.length; i++){
            if(this.table[i]){
                console.log(this.table[i])
            }
        }
    }

    rehash(){
        let oldtable = this.table
        this.size = this.size * 2
        this.table = new Array(this.size)
        this.count = 0
        for(let i=0; i<oldtable.length; i++){
            let bucket = oldtable[i]
            if(bucket !== undefined){
                const [key,value] = bucket
                this.set(key,value)
            }
        }
    }
}

const qp = new QuadraticProbing(10);

qp.set("name", "Messi");
qp.set("mane", "Cristiano"); 
qp.set("club", "Inter Miami");
qp.set("nation", "Argentina");

qp.display();

console.log("Get nation:", qp.get("nation"));
qp.remove("name");
console.log("After removing 'name':");
qp.display();

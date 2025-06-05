//=================================================without delete entry loss further connection=====================================================

class LinearProbing{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }
    hash(key){
        let total=0
        for(let i=0; i<key.length; i++){
            total += key.charCodeAt(i)
        }
        return total % this.size
    }

    set(key,value){
        let index = this.hash(key);
        while(this.table[index] !== undefined && this.table[index][0] !== key){
            index = (index + 1) % this.size;
        }
        this.table[index] = [key,value]
    }

    get(key){
        let index = this.hash(key)
        while(this.table[index] !== undefined){
            if(this.table[index][0] === key){
                return this.table[index][1]
            }
            index = (index + 1) % this.size
        }
        return undefined
    }

    remove(key){
        let index = this.hash(key)
        while(this.table[index] !== undefined){
            if(this.table[index][0] === key){
                this.table[index] = undefined
                return
            }
            index = (index + 1) % this.size
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

const ht = new LinearProbing(10);
ht.set("name", "Rahul");
ht.set("mane", "Cristiano"); 
ht.set("age", "25");
ht.display();

console.log("Get age:", ht.get("age"));

ht.remove("age");
ht.display();



//===================================================with delete =====================================================

const DELETED = Symbol("deleted");

class LinearProbing {
    constructor(size) {
        this.table = new Array(size);
        this.size = size;
    }

    hash(key) {
        let total = 0;
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i);
        }
        return total % this.size;
    }

    set(key, value) {
        let index = this.hash(key);
        let startIndex = index;

        while (this.table[index] !== undefined && this.table[index] !== DELETED && this.table[index][0] !== key) {
            index = (index + 1) % this.size;
            if (index === startIndex) {
                throw new Error("Hash table is full");
            }
        }
        this.table[index] = [key, value];
    }

    get(key) {
        let index = this.hash(key);
        let startIndex = index;

        while (this.table[index] !== undefined) {
            if (this.table[index] !== DELETED && this.table[index][0] === key) {
                return this.table[index][1];
            }
            index = (index + 1) % this.size;
            if (index === startIndex) break;
        }
        return undefined;
    }

    remove(key) {
        let index = this.hash(key);
        let startIndex = index;

        while (this.table[index] !== undefined) {
            if (this.table[index] !== DELETED && this.table[index][0] === key) {
                this.table[index] = DELETED;
                return true;
            }
            index = (index + 1) % this.size;
            if (index === startIndex) break;
        }
        return false;
    }

    display() {
        for (let i = 0; i < this.table.length; i++) {
            const entry = this.table[i];
            if (entry && entry !== DELETED) {
                console.log(`${i}: ${entry[0]} => ${entry[1]}`);
            }
        }
    }
}

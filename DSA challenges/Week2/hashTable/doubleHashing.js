class DoubleHashing{
    constructor(size){
        this.table=new Array(size)
        this.size=size
        this.count=0
        this.prime=this.getPrimeLessThanSize()
    }
    hash1(key){
        let total=0
        for(let i=0;i<key.length;i++){
            total+=key.charCodeAt(i)
        }
        return total%this.size
    }
    hash2(key){
        let total=0
        for(let i=0;i<key.length;i++){
            total+=key.charCodeAt(i)
        }
         return this.prime-(total%this.prime)
    }
    getPrimeLessThanSize(){
        for(let i=this.size-1;i>=2;i--){
            if(this.isPrime(i))return i
        }
        return 3
    }
    isPrime(num){
        if(num<2)return false
        for(let i=2;i<=Math.sqrt(num);i++){
            if(num%i==0){
                return false
            }
        }
        return true
        
    }
    set(key,value){
        let index1=this.hash1(key)
        let index2=this.hash2(key)
        let i=0
        let index=(index1+i*index2)%this.size
        while(this.table[index]!==undefined&&this.table[index][0]!==key){
            i++
            index=(index1+i*index2)%this.size
        }
        this.table[index]=[key,value]
        this.count++
        if(this.count/this.size>0.7){
            this.rehash()
        }
        
    }
    get(key){
        let index1=this.hash1(key)
        let index2=this.hash2(key)
        let i=0
        let index=(index1+i*index2)%this.size
        while(this.table[index]!==undefined){
            if(this.table[index][0]==key){
                return this.table[index][1]
            }
            i++
            index=(index1+i*index2)%this.size
        }
        return undefined
    }
    remove(key){
        let i=0
        let index1=this.hash1(key)
        let index2=this.hash2(key)
        let index=(index1+i*index2)%this.size
        while(this.table[index]!==undefined){
            if(this.table[index][0]==key){
                this.table[index]=undefined
                this.count--
                return
            }
            i++
            index=(index1+i*index2)%this.size
        }
    }
    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(this.table[i])
            }
        }
    }
    rehash(){
        let oldtable=this.table
        this.count=0
        this.size=this.size*2
        this.prime=this.getPrimeLessThanSize()
        for(let i=0;i<oldtable.length;i++){
            let bucket=oldtable[i]
            if(bucket!==undefined){
                const[key,value]=bucket
                this.set(key,value)
            }
        }
    }
}
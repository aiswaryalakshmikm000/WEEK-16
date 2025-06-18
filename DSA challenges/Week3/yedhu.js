
class TrieNode{
    constructor(){
        this.children=Array(26).fill(null);
        this.isEndOfWord=false;
    }
}

class Trie{
    constructor(){
        this.root=new TrieNode();
    }
    
    isEmpty(root){
        for(let i=0;i<26;i++)
        if(root.children[i]!==null)
        return false;
        return true;
    }
    
    insert(key){
        let curr=this.root;
        for(let c of key){
            let index=c.charCodeAt(0)-'a'.charCodeAt(0);
            if(curr.children[index]===null){
            const node= new TrieNode();
            curr.children[index]=node;
            }
            curr=curr.children[index];
        }
        curr.isEndOfWord=true;
    }
    
    search(key){
        let curr=this.root;
        for(let c of key){
            let index=c.charCodeAt(0)-'a'.charCodeAt(0);
            if(curr.children[index]===null)
            return false;
            curr=curr.children[index];
        }
        return curr.isEndOfWord;
    }
    
    isPrefix(key){
        let curr =this.root;
        for(let c of key){
            let index=c.charCodeAt(0)-'a'.charCodeAt(0);
            if(curr.children[index]===null)
            return false;
            curr=curr.children[index];
        }
        return true;
    }
    
    remove(key){
        this.removeWord(this.root,key,0);
    }
    
    removeWord(root,key,depth){
        if(root===null)
        return null;
        
        if(depth===key.length){
            if(root.isEndOfWord)
            root.isEndOfWord=false;
            
            if(this.isEmpty(root))
            root=null;
            
            return null;
        }
        let index=key[depth].charCodeAt(0)-'a'.charCodeAt(0);
        root.children[index]=this.removeWord(root.children[index],key,depth+1);
        
        if(this.isEmpty(root) && root.isEndOfWord)
        root=null;
        
        return root;
        
    }
    
}

const trie = new Trie();
trie.insert("apple");
trie.insert("apply");

// console.log(trie.search("apply"));
trie.remove("apply");
console.log(trie.search("apply"));


Using Object

class TrieNode{
    constructor(){
        this.children={};
        this.isEnd=false;
    }
}
class Trie{
    constructor(){
        this.root=new TrieNode();
    }
    
    insert(key){
        let curr= this.root;
        for(let char of key){
            if(!curr.children[char]){
            const node= new TrieNode();
            curr.children[char]= node;
            }
            curr=curr.children[char];
        }
        curr.isEnd=true;
    }
    
    search(key){
         let curr= this.root;
        for(let char of key){
            if(!curr.children[char]){
           return false
            }
            curr=curr.children[char];
        }
        return curr.isEnd
    }
        
    startsWith(prefix){
        let curr= this.root;
        for(let char of key){
            if(!curr.children[char]){
           return false;
            }
            curr=curr.children[char];
        }
        return true;
    }
    
    autoComplete(prefix){
        let words=[]
        let curr=this.root;
        for(let char of prefix){
            if(!curr.children[char])
            return [];
            curr=curr.children[char];
        }
        this.collectionOfWords(prefix,curr,words);
        return words
    }
    
    collectionOfWords(prefix,node,words){
        if(node.isEnd)
        words.push(prefix);
        
        for(let char in node.children)
        this.collectionOfWords(prefix+char,node.children[char],words);
    }
    
    delete(word){
        this.deleteWord(this.root,word,0);
    }
    deleteWord(node,word,index){
        if(index===word.length){
            if(!node.isEnd) return false;
            node.isEnd=false;
            return Object.keys(node.children)===0;
        }
        
        let char=word[index];
        let childNode= node.children[char];
        if(!childNode) return false;
        
        let shouldDeleteNode=this.deleteWord(childNode,word,index+1);
        if(shouldDeleteNode){
            delete node.children[char];
            return Object.keys(node.children)===0 && !node.isEnd
        }
    }
    
}

const trie= new Trie();
trie.insert("car");
trie.insert("cart");
trie.insert("carry");


// console.log(trie.search("caravan"));
trie.delete("car");
console.log(trie.search("car"));


//to add suffixes and validate if it exists

class TrieNode{
    constructor(){
        this.children={};
        this.isEnd=false;
    }
}
class Trie{
    constructor(){
        this.root=new TrieNode();
    }
    
    insert(suffix){
        let curr=this.root;
        for(let c of suffix){
            if(!curr.children[c])
            curr.children[c]=new TrieNode();
            curr=curr.children[c];
        }
        curr.isEnd=true;
    }
    
    breakWord(word){
        for(let i=0;i<word.length;i++)
        this.insert(word.slice(i));
    }
    
    isSuffix(suffix){
        let curr=this.root;
        for(let c of suffix){
            if(!curr.children[c])
                return false;
                curr=curr.children[c];
            }
            return curr.isEnd;
        }
        
        remove(suffix){
            this.removeNode(this.root,suffix,0);
        }
        removeNode(root,suffix,index){
            if(index===suffix.length){
                if(!root.isEnd) return false;
                root.isEnd=false;
                return Object.keys(root.children)===0
            }
            let char= suffix[index];
            let childNode=root.children[char];
            if(!childNode) 
            return false;
            
            let shouldDeleteNode=this.removeNode(root.children[char],suffix,index+1);
            if(shouldDeleteNode){
                delete root.children[char];
                return Object.keys
            }
            
        }
    }
    
const trie= new Trie();
trie.breakWord("banana");

console.log(trie.isSuffix("na"));
trie.remove('na');
console.log(trie.isSuffix("a"));

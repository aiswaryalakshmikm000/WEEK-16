class TrieNode {
    constructor() {
        this.children = {} // Holds child nodes. Key: character, Value: TrieNode
        this.EndWord = false //end of word marking
    }
}

class Trie{
    constructor() {
        this.root = new TrieNode()  //root node empty prefix
    }

    insert(word) {
        let curr = this.root
        for (let val of word) {
            if (!curr.children[val]) {
                curr.children[val] = new TrieNode()
            }
            curr = curr.children[val]
        }
        curr.EndWord = true
    }

    longestPrefix() {   // flower, flow, flop
        let curr = this.root
        let prefix = ''
        while (curr) {
            const keys = Object.keys(curr.children) // ['f'],      for o => ['w', 'p']  if !==1 then more words are there || endWord true case ...so that is the largest so break
            if(keys.length !== 1 || curr.EndWord) break // !==1 means root cant have multiple words of diff letter start like flower, flop, door/// f and d so break prefix = '' ||| also flop flex....so o and e
            let val = keys[0]
            prefix += val
            curr = curr.children[val]
        }
        return prefix
    }

    collectAllWords(prefix, word, curr) {
        if(curr.EndWord) {
            word.push(prefix)  // pushes at the flow , flower, flop  for the flo prefix
        }
        for(let key in curr.children) {
            this.collectAllWords(prefix + key, word, curr.children[key]) // this is a depth first search
        }
    }

    autoComplete(prefix){
        let curr = this.root
        let words = []
        for (let val of prefix){ // if any letter not found then the prefix not exists
            if (!curr.children[val]){
                return words // prefix not found the n return []
            }
            curr = curr.children[val] 
        }
        this.collectAllWords(prefix, words, curr)
        return words
    }

    search(prefix) {
        let curr = this.root
        for (let val of prefix){
            if (!curr.children[val]){
                return false
            }
            curr = curr.children[val]
        }
        return curr.EndWord
    }
}



const trie = new Trie();

trie.insert("flower");
trie.insert("flow");
trie.insert("flight");
trie.insert("flap");


console.log("Longest Prefix:", trie.longestPrefix()); 

console.log("Auto-complete for 'fl':", trie.autoComplete("fl")); 
console.log("Auto-complete for 'flo':", trie.autoComplete("flo")); 
console.log("Auto-complete for 'fla':", trie.autoComplete("fla")); 
console.log("Auto-complete for 'xyz':", trie.autoComplete("xyz")); 

// Test search
console.log("Search for 'flower':", trie.search("flower")); 
console.log("Search for 'flow':", trie.search("flow"));     
console.log("Search for 'fl':", trie.search("fl"));   
console.log("Search for 'xyz':", trie.search("xyz"));   

// Test collectAllWords
let allWords = [];
trie.collectAllWords("", allWords, trie.root);
console.log("All words in Trie:", allWords); 
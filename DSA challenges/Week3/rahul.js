

TRIE
____________________________
class TrieNode {
    constructor() {
        this.children = {};
        this.isEnd = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEnd = true;
    }

    search(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) return false;
            node = node.children[char];
        }
        return node.isEnd;
    }

    startWith(prefix) {
        let node = this.root;
        for (let char of prefix) {
            if (!node.children[char]) return false;
            node = node.children[char];
        }
        return true;
    }

    AutoComplete(prefix) {
        let words = [];
        let node = this.root;
        for (let char of prefix) {
            if (!node.children[char]) {
                return [];
            }
            node = node.children[char];
        }
        this.collectionofWord(prefix, node, words);
        return words;
    }

    collectionofWord(prefix, node, words) {
        if (node.isEnd) {
            words.push(prefix);
        }
        for (let key in node.children) {
            this.collectionofWord(prefix + key, node.children[key], words);
        }
    }

    delete(word) {
        this.deleteword(this.root, word, 0);
    }

    deleteword(node, word, index) {
        if (index === word.length) {
            if (!node.isEnd) return false;
            node.isEnd = false;
            return Object.keys(node.children).length === 0;
        }

        const char = word[index];
        const childNode = node.children[char];
        if (!childNode) return false;

        const shouldDeleteCurrentnode = this.deleteword(childNode, word, index + 1);
        if (shouldDeleteCurrentnode) {
            delete node.children[char];
            return Object.keys(node.children).length === 0 && !node.isEnd;
        }

        return false;
    }
}

// Testing
const trie = new Trie();

trie.insert("cat");
trie.insert("car");
trie.insert("cart");
trie.insert("dog");

console.log(trie.search("cat"));       // true
console.log(trie.search("cap"));       // false
console.log(trie.startWith("ca"));     // true
console.log(trie.AutoComplete("ca"));  // [ 'cat', 'car', 'cart' ]

// Deleting a word
trie.delete("car");
console.log(trie.search("car"));       // false
console.log(trie.AutoComplete("ca"));  // [ 'cat', 'cart' ]


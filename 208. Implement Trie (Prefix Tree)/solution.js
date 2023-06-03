class TrieNode {
    constructor(children = {}, end_of_word = false){
        this.children = children;

        this.end_of_word = end_of_word;
    }
}

//Time: O(c), c=# of characters in the word
//Space O(b), b=# of characters in the word


var Trie = function() {
    this.root = new TrieNode();
};

/** 
 * @param {string} word
 * @return {void}
 */

Trie.prototype.insert = function(word) {
    let current = this.root;

    for(let char of word){
        if(!current.children[char])
            current.children[char] = new TrieNode();
        
        current = current.children[char];
    }

    current.end_of_word = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let current = this.root;

    for(let char of word){
        if(current.children[char])
            current = current.children[char];
        else
            return false;
    }

    return current.end_of_word;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let current = this.root;

    for(let char of prefix){
        if(current.children[char])
            current = current.children[char];
        else
            return false;
    }

    return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
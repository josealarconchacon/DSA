"strict";

class HashTable {
  // constructor that will receive a size
  constructor(size) {
    // new array that will hold information
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let x = 0; x < key.length; x++) {
      hash = (hash + key.charCodeAt(x) * x) % this.data.length;
    }
    return hash;
  }
}
// give a memory space of 100 to the HashTable
const hashTable = new HashTable(100);

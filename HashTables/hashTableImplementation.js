"strict";

class HashTable {
  // constructor that will receive a size
  constructor(size) {
    // new array that will hold information
    this.data = new Array(size);
  }

  _hashKey(key) {
    let hash = 0;
    for (let x = 0; x < key.length; x++) {
      hash = (hash + key.charCodeAt(x) * x) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    // store key and value data into the indexAddress space
    let indexAddress = this._hashKey(key);
    // check if the indexAddress already has a value
    if (!this.data[indexAddress]) {
      // create a new bucket
      this.data[indexAddress] = [];
    }
    this.data[indexAddress].push([key, value]);
    return this.data;
  } // O(1)

  get(key) {
    let indexAddress = this._hashKey(key);
    const currentBucket = this.data[indexAddress];
    console.log(currentBucket);
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    } // O(1)
    return undefined;
  }

  // Grab all keys
  keys() {
    let keysArray = [];
    // loop through all 30 items spaces
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keysArray.push(this.data[i][0][0]);
      }
    }
    return keysArray;
  }

  // Grab values
  values() {
    let valuesArray = [];
    // loop through all 30 items spaces
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        valuesArray.push(this.data[i][0][1]);
      }
    }
    return valuesArray;
  }
}
// give a memory space of 30 to the HashTable
const hashTable = new HashTable(30);
console.log(hashTable.set("tesla model 3", 40000));
console.log(hashTable.set("tesla model y", 55000));
console.log(hashTable.get("tesla model y"));
console.log(hashTable.keys());
console.log(hashTable.values());

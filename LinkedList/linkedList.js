"strict";
// 20 -> 15 -> 23 -> 10

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Linked {
  constructor(value) {
    this.head = {
      // value of node
      value: value,
      // next is the pointer to the next node
      next: null,
    };
    this.tail = this.head;
    // keeping track of LinkedList
    this.length = 1;
  }
  // append to linked list
  append(value) {
    // create new node object with property of value and next
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this.length;
  }

  // prepend: add to the beginning of the list
  prepend(value) {
    // create new node object with property of value and next
    const newNode = new Node(value);
    // newNode will point to the head, the fist item in the list
    newNode.next = this.head;
    // head will point to the newNode
    this.head = newNode;
    this.length++;
  }

  // insert: add to the middle of the list
  insert(value, index) {
    // if index is out of bounds
    if (index >= this.length) {
      // append to end of the list
      return this.append(value);
    }
    // if index is 0
    if (index === 0) {
      // add to the beginning of the list
      this.prepend(value);
      return this.length;
    }
    // if index is the end
    if (index === this.length) {
      // append to the end of the list
      this.append(value);
      return this.length;
    }
    // create new node object with property of value and next
    // if index is in the middle
    const newNode = new Node(value);
    // iterate through the list
    let current = this.head;
    // iterate through the list until the index
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    // add the newNode to the current.next
    newNode.next = current.next;
    // add the newNode to the current
    current.next = newNode;
    this.length++;
    return this.length;
  }

  // remove at index
  remove(index) {
    // if index is out of bounds return null
    if (index >= this.length) {
      return null;
    }

    const leader = this.traverseToIndex(index - 1);
    // create a reference to point to the node that is after the one we want to remove
    const removeNode = leader.next;
    leader.next = removeNode.next;
    // decrease the length
    this.length--;
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
}

const linkedList = new Linked(20);
linkedList.append(15);
linkedList.prepend(3);
linkedList.insert(12, 1);
linkedList.insert(1, 100);
linkedList.remove(1);
console.log(linkedList);

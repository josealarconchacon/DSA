// create a Node Class
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    // previous Pointer
    this.previous = null;
  }
}

// create a double linked list class
class DoubleLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      // previous Pointer
      previous: null,
    };
  }

  // append to double linked list
  append(value) {
    // create a new node
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
}

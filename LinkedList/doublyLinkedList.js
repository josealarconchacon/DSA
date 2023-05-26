// create a Node Class
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    // Point to the previous node
    this.previous = null;
  }
}

// create a double linked list class
class DoubleLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      // Point to the previous node
      previous: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  // append to double linked list
  append(value) {
    // create a new node
    const newNode = new Node(value);
    newNode.previous = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  // prepend to the beginning of the list
  prepend(value) {
    // create a new node
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.previous = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }

  //remove at index
  removeAtIndex(index) {
    //check if index is out of bounds
    if (index < 0 || index >= this.length) {
      return null;
    }
    // if index is 0
    if (index === 0) {
      // remove head
      this.head = this.head.next;
      this.head.previous = null;
      this.length--;
      return this;
    }
    // if index is length - 1
    if (index === this.length - 1) {
      // remove tail
      this.tail = this.tail.previous;
      this.tail.next = null;
      this.length--;
      return this;
    }
    // if index is in the middle
    const currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    // remove the node
    const removedNode = currentNode.next;
    removedNode.previous.next = removedNode.next;
    removedNode.next.previous = removedNode.previous;
    this.length--;
    return this;
  }
}

const d_linked_list = new DoubleLinkedList(10);
d_linked_list.append(2);
d_linked_list.append(3);
// prepend
d_linked_list.prepend(8);
// remove
d_linked_list.removeAtIndex(0);
console.log(d_linked_list);

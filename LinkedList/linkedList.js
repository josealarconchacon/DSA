"strict";
// 20 -> 15 -> 23 -> 10

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
    const newNode = {
      value: value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this.length;
  }

  // prepend: add to the beginning of the list
  prepend(value) {
    // create new node object with property of value and next
    const newNode = {
      value: value,
      next: null,
    };
    // newNode will point to the head, the fist item in the list
    newNode.next = this.head;
    // head will point to the newNode
    this.head = newNode;
    this.length++;
  }
}

const linkedList = new Linked(20);
linkedList.append(15);
linkedList.prepend(3);
console.log(linkedList);

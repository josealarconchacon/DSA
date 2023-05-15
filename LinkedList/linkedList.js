"strict";
// 20 -> 15 -> 23 -> 10

class Linked {
  constructor(value) {
    this.head = {
      value: value,
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
}

const linkedList = new Linked(20);
linkedList.append(15);
console.log(linkedList);

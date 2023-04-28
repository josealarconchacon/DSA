"strict";

class Color {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  // get data from memory
  get(index) {
    return this.data[index];
  }
  // push item to the end of the array
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  // remove last item in the array
  pop() {
    const removeLast = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return removeLast;
  }
  // delete
  delete(index) {
    // create reference of the item that will be deleted
    const item = this.data[index];
    this.shiftItem(index);
  }
  // shiftItem() method will shift the index of the other data type by one once an item has been deleted
  shiftItem(index) {
    for (let item = index; item < this.length - 1; item++) {
      // take each item in data and shift it to the left by 1
      this.data[item] = this.data[item + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const newColor = new Color();
newColor.push("Red");
newColor.push("Yellow");
newColor.push("Green");
newColor.delete(2);
newColor.push("Blue");
newColor.push("Grey");
console.log(newColor);

// newColor.pop();
// console.log(newColor);

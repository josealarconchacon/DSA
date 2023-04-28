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
}

const newColor = new Color();
newColor.push("Red");
console.log(newColor);

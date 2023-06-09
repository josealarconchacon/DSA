class Cars<T> {
  private data: T[];

  add(item: T) {
    this.data.push(item);
  }
  remove() {
    this.data.shift();
  }
}

// configuring the data when creating new instances
const car = new Cars<string>();
car.add("BMW");
car.add("Audi");

const carNumber = new Cars<number>();
carNumber.add(1);
carNumber.add(2);

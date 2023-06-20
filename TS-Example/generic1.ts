// Generic
function insertAtBeginning<T>(array: T[], value: T) {
  const newArr = [value, ...array];
  return newArr;
}

const myArray = [1, 2, 3];
const updateArr = insertAtBeginning(myArray, -1); // -1,1,2,3
const stArr = insertAtBeginning(["c", "f"], "f");

// Class
class Car {
  name: string;
  private model: string[];
  cost: number;

  constructor(name: string, model: string[], cost: number) {
    this.name = name;
    this.model = model;
    this.cost = cost;
  }

  buy(newCar: string) {
    this.model.push(newCar);
  }
  listOfCars() {
    return this.model.slice();
  }
}

const C1 = new Car("Honda", ["Model R", "Civic"], 20000);
C1.buy("Civic");
// C1.listOfCars()

// Generic
function insertAtBeginning<T>(array: T[], value: T) {
  const newArr = [value, ...array];
  return newArr;
}

const myArray = [1, 2, 3];
const updateArr = insertAtBeginning(myArray, -1); // -1,1,2,3
const stArr = insertAtBeginning(["c", "f"], "f");

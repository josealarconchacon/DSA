// annotation array s and objects

// the type of the array will be set to any
let animals = [];
// assume the the array will be fill with string values
let animal: string[] = [];

// array with different types of values
// use the union type
let numbers: number[] | string[] = [];

// typescript can inference union types
let numbers2 = [1, 2, "dog"];

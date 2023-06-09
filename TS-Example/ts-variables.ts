// string, number, boolean, null, undefined

// type annotation
let greet: string = "";
greet = "Hello";
greet = 1; // Type 'number' is not assignable to type 'string'.

// type inference
let myName = "";
myName = "Tom";
myName = 1; // Type 'number' is not assignable to type 'string'.

// The any type in TypeScript is a generic type used when a variable’s type is unknown
let deal: any;
deal = "New Promotion";
deal = 1;
deal = true;

// Union Types
// allows us to use more than one data type for a variable or a function
let myRealDeal: string | number | boolean;
myRealDeal = "New Promotion";
myRealDeal = 1;
myRealDeal = true;

// Type Aliases

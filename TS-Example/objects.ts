// Apply types to an object
const account: {
  // annotating an object
  name: string;
  age: number;
  balance: number;
  city: string;
  // here, the status is missing from the object
  // we can get around this error, by making the status optional using ?
  status?: string;
} = {
  name: "Marcus",
  age: 89,
  balance: 10,
  city: "NY",
};

// this syntax will store an array of objects
let accounts: {}[];

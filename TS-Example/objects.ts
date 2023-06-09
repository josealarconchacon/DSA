// Apply types to an object
const account: {
  // annotating an object
  name: string;
  balance: number;
  // here, the status is missing from the object
  // we can get around this error, by making the status optional using ?
  status?: string;
} = {
  name: "Marcus",
  balance: 10,
};

// this syntax will store an array of objects
let accounts: {}[];

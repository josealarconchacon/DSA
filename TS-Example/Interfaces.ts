// Using Interfaces to make object more readable
interface IAccount {
  name: string;
  balance: number;
  status?: string;
  // method
  deposit?: () => void; // function have a void annotation
}

const account: IAccount = {
  name: "Jhon",
  balance: 100,
};

let accounts: IAccount[];

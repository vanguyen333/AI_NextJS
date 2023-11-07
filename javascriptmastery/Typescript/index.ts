//command to run the project npx tsc index.ts
console.log("Hello TypeScript!");

//Implicit Types
let helloWorld = "Hello, World!";

//Explicit types
let firstName: string = "Vanni";
let age: number = 30;

//Tuple
type stringAndNumber = [string, number];

let x: stringAndNumber = ["hello", 10];

//Enums
enum Continents {
  North_America, //0
  South_America, //1
  Africa, //2
  Asia,
  Europe,
  Antartica,
  Australia,
}
//usage
var region = Continents.Africa; //2

//interface
interface User {
  name: string;
  id: number;
}

const user: User = {
  name: "John",
  id: 0,
};

//Compusing types -> Union
type WindowStates = "open" | "closed" | "minimized";

// const windowState: WindowStates = " I dont know, this is not a window";
type LockStates = "locked" | "unlocked";
type OddNumberUnderTen = 1 | 3 | 5 | 7 | 9;
const odd: OddNumberUnderTen = 5;

const getLength = (param: string | string[]) => {
  return param.length;
};
getLength("test"); //4
getLength(["test", "test1"]); //2

getLength(5); //unvalid code

/**
 * Basic type
 */
// //string
// let car: string = "Toyota";
// //number
// let num: number = 18;
// //boolean
// let isLogin: boolean = true;
// //undefined
// let body: undefined = undefined;
// //null
// let footer: null;
// // any: han che dung
// let person: any;
// person = 18;
// person = "Hello";

/**
 * Object
 */
// let house: {
//   address: string;
//   color?: string;
// } = { address: "" };
// house.address = "Da Nang";

/**
 * Array
 */
// let addresses: string[] = [];
// addresses.push("Ha Noi");

// // number []
// let numbers: number[] = [];
// numbers = [1, 2, 4];
// //obj arrday
// let people: {
//   name: string;
//   age: number;
// }[] = [];

/**
 * Func
 */
// const sum = (num1: number, num2: number): number => {
//   return num1 + num2;
// };
// sum(1, 4);
// const handle = () => {
//   console.log("Hello");
// };

/**
 * Union
 */
// let price: string | number;
// price = "10";
// price = 10;
// let body: { name: string | number } | { firstName: string } = {
//   name: 22,
// };

/**
 * Enum
 */
// enum Sizes {
//   S = 1,
//   M,
//   L,
//   X,
// }

/**
 * Interface : hay thao tac voi obj
 */

// interface State {
//   name: string;
//   isLogin: boolean;
// }
// let state: State = {
//   name: "Dang",
//   isLogin: true,
// };

/**
 * Type
 * interface có khả năng merge lại
 * còn Type thì không thể merge
 * bù lại Type có thể gộp hoặc Union
 * => Nên dùng type hơn vì có thể gộp và Union , có những tiện ích của interface
 */

// type State = {
//   name: string;
//   isLogin: boolean;
// };

// let state: State = {
//   name: "Dang",
//   isLogin: true,
// };
// type Name = {
//   name: string;
// };
// type Age = {
//   age: number;
// };
// type Person = Name & Age;
// let state: Person = {
//   name: "Dang",
//   age: 33,
// };

/**
 * Generic
 */

const handleClick = <Type>(value: Type) => value;
handleClick<string>("3");
/**
 * Class
 */

// class Person {
//   public name: string;
//   age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

// const alex = new Person("alex", 27);
// alex.age
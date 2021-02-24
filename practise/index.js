// const first = (firstName) => {
//   console.log(firstName);
//   return firstName;
// };

// const second = (lastName) => {
//   const firstName = first("sumukha");
//   console.log(`my full name is ${firstName} ${lastName} `);
// };

// second("kb");

// function normalFun() {
//   console.log("normal funciton");
// }

// normalFun();

// function User(name, age) {
//   this.name = name;
//   this.age = age;
// }

// User.prototype.introduction = function () {
//   return `my name is ${this.name} and my age is ${this.age}`;
// };

// const user1 = new User("ravi", 20);

// var parent = {
//   foo: function () {
//     console.log(`bar`);
//   },
// };
// var child = Object.create(parent);
// child.foo(); // ‘bar’

// const Car = function () {};
// Car.prototype.drive = function () {
//   console.log("this is how you drive cars");
// };
// const toronto = new Car();
// toronto.drive();

// function Rectangle(width, height) {
//   this.width = width;
//   this.height = height;
// }

// Rectangle.prototype.area = function () {
//   return this.height * this.width;
// };

// function Square() {}

// Square.prototype = Object.create(Rectangle.prototype);
// const rect = new Rectangle(100, 200);
// const square = new Square();
// console.log(square.area());

// (function () {
//   console.log("hello i am iife");
// })();

// hello();

// function hello() {
//   console.log("i am hello function");
// }

// const addNums = (a, b) => {
//   return a + b;
// };

// console.log(addNums.call(null, 1, 2));

//execution context
let a = "Hello World!";
function first() {
  let b = "i am b";
  console.log(b);
  console.log("Inside first function");
  second();
  console.log("Again inside first function");
}
function second() {
  console.log("Inside second function");
}
first();
console.log("Inside Global Execution Context");

const fetchSomething = async () => {
  console.log("hello i am asynchronous");
};

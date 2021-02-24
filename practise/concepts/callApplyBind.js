const user1 = {
  firstName: "virat",
  lastName: "kohli",
  fullName() {
    console.log(`full name is ${this.firstName}  ${this.lastName} `);
  },
};

const intro = function (proffession) {
  console.log(
    `Hi,i am ${this.firstName} ${this.lastName} and i am a ${proffession} `
  );
};

const user2 = {
  firstName: "rohit",
  lastName: "sharma",
};

//borrow methods from user1
user1.fullName.call(user2);

intro.call(user2, "cricketer");

/**
 * Bind method:- It will create a copy of function and  bind to the object and then return the copy of the method,so that we can call that later
 */

const sayHelloFun = function () {
  console.log(`"hello hi how are you" ${this.firstName}`);
};

const helloFun = sayHelloFun.bind(user1);

console.log(helloFun());

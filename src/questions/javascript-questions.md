---
title: JavaScript Questions
layout: layouts/page.njk
permalink: /questions/javascript-questions/index.html
---

- Explain event delegation.
  > **JavaScript event delegation is a simple technique by which you can add a single event handler to the parent instead of adding same event handler to his multiple child elements.**
- Explain how `this` works in JavaScript.

  - Can you give an example of one of the ways that working with `this` has changed in ES6?
    > It has different values depending on where it is used:
    >
    > - In a method, this refers to the owner object.
    > - Alone, this refers to the global object.
    > - In a function, this refers to the global object.
    > - In a function, in strict mode, this is undefined.
    > - In an event, this refers to the element that received the event.
    > - Methods like call(), and apply() can refer this to any object

- Explain how prototypal inheritance works.
  > **Every object has a property called prototype to which you can add methods and properties to it.If we create the new object from this object then the newly created object has access to methods and properties that live in parent. When we call a method on newly created object,first it looks inside it's prototype and then it looks for parent prototype**
  > Refer this article on freecodecamp [prototype in javascript](freecodecamp.org/news/all-you-need-to-know-to-understand-javascripts-prototype-a2bff2d28f03/)
- What's the difference between a variable that is: `null`, `undefined` or undeclared?

  > **`undefined`:-** Variable is declared but we don't assign any value to them. Even before executing a single line of code, javascript allocates memory to variables and values for those is undefined
  > **`undeclared`:-** Variables is not allocated in the global execution context.
  > **`null`:-** 'null' is a keyword in JavaScript that signifies 'no value' and type of `null` is object
  > Refer this article [null vs undefined](https://medium.com/technoetics/difference-between-null-undefined-and-not-defined-in-javascript-3a52a62894b)

- What is a closure and explain lexical environment?
  > Refer this article:-[closure explained in bit](https://blog.bitsrc.io/a-beginners-guide-to-closures-in-javascript-97d372284dda),[closure explained in medium](https://medium.com/@prashantramnyc/javascript-closures-simplified-d0d23fa06ba4) > **Function along with it's lexical scope bundled together forms closure.Lets take this example refer closure.js** > **When a function returns another function, the returning function holds the environment or values it needed in a close scope**
- Explain Execution context?
  > Refer these article [Execution context](https://blog.bitsrc.io/understanding-execution-context-and-execution-stack-in-javascript-1c9ea8642dd0)
- What language constructions do you use for iterating over object properties and array items?
- Can you describe the main difference between the `Array.forEach()` loop and `Array.map()` methods and why you would pick one versus the other?
- Explain anonymous functions?
  > Refer this article:- [anonymous function in js](https://www.javascripttutorial.net/javascript-anonymous-functions/)
- What's the difference between host objects and native objects?
- Explain the difference between: `function Person(){}`, `var person = Person()`, and `var person = new Person()`?
  > **`var person = new Person()` here Person() is a constructor function.Here we instantiated Person constructor,which creates the new object and then returns that object and then we assign that object to person variable**
- Explain the differences on the usage of `foo` between `function foo() {}` and `var foo = function() {}`
  > **`function foo() {}`here we declaring a function(function declaration) and `var foo = function() {}` is a function expression**
- Explain the difference between function declaration and function expression?
  > **`function hello(){}` is a function declaration and const hello=function(){} is a function expression**
- Can you explain what `Function.call` and `Function.apply` do? What's the notable difference between the two?
- Explain `Function.prototype.bind`.
- What's the difference between feature detection, feature inference, and using the UA string?
- Explain "hoisting".
  > **Hoisting is a JavaScript mechanism where variable declarations using var are hoisted/lifted to the top of their scope (to the top of their functional/ local scope if they are declared inside a function or to the top of their global scope if they are declared outside of a function) as soon as JavaScript compiles all of your code.Even before executing a single line of code the memory is allocated for the variables and is set to undefined by default(only for var and let) and for normal function `function hello(){}`, the entire function is placed in memory, but for function expression `var x = function (a, b) {return a * b}`, here x is set to undefined by default,since x is just a variable**
- Describe event bubbling.
- Describe event capturing.
- Explain async and defer.
  > Refer this article:- [async and defer in js](https://www.digitalocean.com/community/tutorials/html-defer-async)
- What's the difference between an "attribute" and a "property"?
- What are the pros and cons of extending built-in JavaScript objects?
- What is the difference between `==` and `===`?
  > **Both used as comparison operator, `==` compares values where as `===` compares value along with type**
- Explain the same-origin policy with regards to JavaScript.
- Why is it called a Ternary operator, what does the word "Ternary" indicate?
- What is strict mode? What are some of the advantages/disadvantages of using it?
- What are some of the advantages/disadvantages of writing JavaScript code in a language that compiles to JavaScript?
- What tools and techniques do you use debugging JavaScript code?
- Explain the difference between mutable and immutable objects.
  - What is an example of an immutable object in JavaScript?
  - What are the pros and cons of immutability?
  - How can you achieve immutability in your own code?
- Explain the difference between synchronous and asynchronous functions.
- What is event loop?
  > Refer this article on medium :- [event loop](https://medium.com/front-end-weekly/javascript-event-loop-explained-4cd26af121d4)
- What are the differences between variables created using `let`, `var` or `const`?
  > **var-** is function scoped, where as **let and const** are block scoped
  > **var** exist from the beginning, where as **let and const** are introduced in Es6
  > **var** is hoisted,where as **let and const** are not hoisted
  > Refer this article on medium [important:- var,let and const](https://medium.com/@dianajyoo/var-let-or-const-ad319d958842)
- What are the differences between ES6 class and ES5 function constructors?
- Can you offer a use case for the new arrow `=>` function syntax? How does this new syntax differ from other functions?
- What advantage is there for using the arrow syntax for a method in a constructor?
- What is the definition of a higher-order function?
- Can you give an example for destructuring an object or an array?
- Can you give an example of generating a string with ES6 Template Literals?
- Can you give an example of a curry function and why this syntax offers an advantage?
- What are the benefits of using `spread syntax` and how is it different from `rest syntax`?
- How can you share code between files?
- Why you might want to create static class members?
- What is the difference between `while` and `do-while` loops in JavaScript?
- What is a promise? Where and how would you use promise?

## Coding questions

- Make this work:

```javascript
duplicate([1, 2, 3, 4, 5]); // [1,2,3,4,5,1,2,3,4,5]
```

- Create a for loop that iterates up to `100` while outputting **"fizz"** at multiples of `3`, **"buzz"** at multiples of `5` and **"fizzbuzz"** at multiples of `3` and `5`
- What will be returned by each of these?

```javascript
console.log("hello" || "world");
console.log("foo" && "bar");
```

- Write an immediately invoked function expression (IIFE)

/**
 * closure=Function along with it's lexical scope bundled together forms closure
 */

function a() {
  let msg = "hello i am b";
  function b() {
    console.log(msg);
  }
  msg = "hello i am changed";
  return b;
}

const aFun = a();
//here "function a" return function along with its lexical scope, here function b remembers msg location(fun b has reference of msg variable not it's value)

aFun(); //returns hello i am changed

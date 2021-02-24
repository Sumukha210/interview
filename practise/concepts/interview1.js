/**
 display the values
 */
const obj = {
  x: 1,
  y: 2,
};
// console.log(Object.values(obj));

const obj1 = {
  a: 1,
  b: 2,
  getA() {
    console.log(this.a);
    return this; //this is the answer
  },
  getB() {
    console.log(this.b);
  },
};
// console.log(obj1.getA().getB());

/*[1,2].print should print 1,2*/
Array.prototype.print = function () {
  return this.join(",");
};
const arr = [1, 2, 5];
// console.log(arr.print());

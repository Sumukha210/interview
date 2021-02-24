/**
 * Sum All Numbers in a RangePassed
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-numbers-in-a-range

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
sumAll([1, 4]) should return a number.
sumAll([1, 4]) should return 10.
sumAll([4, 1]) should return 10.
sumAll([5, 10]) should return 45.
sumAll([10, 5]) should return 45
 */
const sumOfAllNumbers = (arr) => {
  const [num1, num2] = arr;
  const condition = num1 > num2;
  let sum = 0;
  if (condition) {
    for (let i = num2; i <= num1; i++) {
      sum += i;
    }
  } else {
    for (let i = num1; i <= num2; i++) {
      sum += i;
    }
  }
  return sum;
};

console.log(sumOfAllNumbers([10, 11]));

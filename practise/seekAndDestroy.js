/**
 * Seek and Destroy
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/seek-and-destroy

Note
You have to use the arguments object.
 */

const destroyer = (arr = [], ...others) =>
  arr.filter((item) => !others.includes(item));

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3, 8));

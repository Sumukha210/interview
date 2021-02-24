/**
 * Diff Two Arrays
 Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/diff-two-arrays

 Note
 You can return the array with its elements in any order.
 */

const diffTwoArrays = (arr1 = [], arr2 = []) => {
  const result = [];

  arr1.map((item) => !arr2.includes(item) && result.push(item));
  arr2.map((item) => !arr1.includes(item) && result.push(item));

  return result;
};
console.log(diffTwoArrays([1, 2, 3, 5], [1, 2, 3, 4, 5]));

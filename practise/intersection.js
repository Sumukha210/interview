/**
 * intersection - Find the intersection of two arrays. Can you do it in O(M+N) time (where M and N are the lengths of the two arrays)?

    intersection([1, 5, 4, 2], [8, 91, 4, 1, 3])    // [4, 1]
    intersection([1, 5, 4, 2], [7, 12])             // []
 */

const intersection = (arr1 = [], arr2 = []) =>
  arr1
    .map((item) => (arr2.includes(item) ? item : null))
    .filter((item) => item && item);

console.log(intersection([1, 5, 4, 2], [8, 91, 4, 1, 3]));

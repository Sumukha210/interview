/**
 * Write an efficient function to return maximum occurring character in the input string e.g., if input string is “test” then function should return ‘t’.
 */
const maxChars = (str = "") => {
  let chars = {};
  let max = 0;
  let result = "";

  for (let char of str) {
    if (chars[char]) {
      chars[char]++;
    } else {
      chars[char] = 1;
    }
  }

  for (let i in chars) {
    if (chars[i] > max) {
      result = i;
      max = chars[i];
    }
  }
  return result;
};

//o(2n)

console.log(maxChars("how are you"));

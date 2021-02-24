const firstRepeatingChar = (str = "") => {
  const result = {};
  for (let char of str) {
    if (result[char]) {
      return char;
    }
    result[char] = true;
  }
};

console.log(firstRepeatingChar("hello"));

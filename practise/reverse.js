//if reverse method is permitted
const reverseString1 = (str) => [...str].reverse().join("");
//O(n2)

//if reverse method is not permitted

const reverseString2 = (str) => {
  let result = [];

  for (let i = 0; i < str.length; i++) {
    result.unshift(str[i]);
  }

  return result.join("");
};

//using while loop
const reverseString3 = (str) => {
  let result = "";
  let i = str.length - 1;
  while (i >= 0) {
    result += str[i];
    i--;
  }
  return result;
};

//o(n)

//using for of loop
const reverseString4 = (str) => {
  let result = "";
  for (let char of str) {
    result = char + result;
  }
  return result;
};
console.log(reverseString4("hello"));

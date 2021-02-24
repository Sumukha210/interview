/**
 * Reverse an integer that is the reverse ordering of numbers
 *
 * reverse(15)=51
 * reverse(500)=5
 * reverse(-15)=51
 *
 */

const reverse = (str) => str.split("").reverse().join("");

const reverseNum = (num) => {
  let result;
  let converted = num.toString();
  if (Math.sign(num) === 1) {
    result = reverse(converted);
  } else {
    result = -reverse(converted.replace("-", ""));
  }
  return parseInt(result);
};

// console.log(reverseNum(-92));

//using ternary operator or shorter syntax
const reverseNum2 = (num) =>
  parseInt(
    Math.sign(num) === 1
      ? reverse(num.toString())
      : -reverse(num.toString().replace("-", ""))
  );
console.log(reverseNum2(-22));

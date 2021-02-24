const findFactorial = (num) => {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }

  return `the factorial of ${num} is ${result}`;
};

console.log(findFactorial(6));

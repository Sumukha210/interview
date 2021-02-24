const Power = (base, exp) => {
  let result = 1;
  for (let i = 1; i <= exp; i++) {
    result *= base;
  }
  return result;
};

console.log(Power(2, 3));

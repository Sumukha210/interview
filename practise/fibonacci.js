//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377,
const fibonacci = (num) => {
  let fib = [];
  let a = 0,
    b = 1,
    result;
  fib.push(a);
  fib.push(b);

  for (let i = 0; i <= num; i++) {
    result = a + b;
    fib.push(result);
    a = b;
    b = result;
  }

  return fib;
};

console.log(fibonacci(10));

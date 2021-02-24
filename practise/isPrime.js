const isPrime = (num) => {
  if (num === 1) return `And 1 is not prime and also not composite.`;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return `not a prime number`;
    }
  }
  return `is a prime number`;
};

console.log(isPrime(1));

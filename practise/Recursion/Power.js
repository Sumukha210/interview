const Power = (base, exp) => {
  if (base < 1) return;
  if (exp < 1) return 1;
  return base * Power(base, exp - 1);
};

console.log(Power(2, 0));

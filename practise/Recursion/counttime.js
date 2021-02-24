const countdown = (num) => {
  if (num < 1) {
    console.log("countdown stopped");
    return;
  }
  console.log("number is", num);
  num--;
  return countdown(num);
};
console.log(countdown(3));

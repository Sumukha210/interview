const arrayChunking = (arr = [], num) => {
  let result = [];

  while (arr.length > 0) {
    result.push(arr.splice(0, num));
  }

  return result;
};

console.log(arrayChunking([1, 2, 3, 4, 5, 6, 7], 5));

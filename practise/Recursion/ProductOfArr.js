// productOfArray([1,2,3,10]) // 60
let arr = [1, 2, 3, 10];
const productOfArray = () => {
  if (arr.length < 1) return 1;
  let result = 0;
  return result + productOfArray(arr.slice(1));
};

console.log(productOfArray());

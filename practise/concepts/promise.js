console.log("a");
const newPromise = new Promise((resolve, reject) => {
  let condition = true;

  setTimeout(() => {
    if (condition) {
      resolve(`i am success message`);
    } else {
      reject("i am rejected");
    }
  }, 1000);
});

console.log("b");
console.log("c");

newPromise.then((res) => console.log(res)).catch((err) => console.log(err));

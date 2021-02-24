//write a function that accepts a string and capitalize the first letter of each word in the string
//capitalize("a lazy fox")=> A Lazy Fox
const capitalize = (str = "") => {
  return str
    .split(" ")
    .map((char) => char.replace(char[0], char[0].toUpperCase()))
    .join(" ");
};

console.log(capitalize("a lazy fox"));

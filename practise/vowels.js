const countVowels = (str = "") => {
  const vowels = ["a", "e", "i", "o", "u"];
  let counter = 0;
  [...str.toLocaleLowerCase()].forEach((char) => {
    if (vowels.includes(char)) {
      counter++;
    }
  });
  return counter;
};

console.log(countVowels("hello how are you"));

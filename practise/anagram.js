const purifyWord = (str) => str.replace(/[\W_]/g, "").toLowerCase();

const wordCount = (str) => {
  let result = {};
  [...purifyWord(str)].map((char) =>
    result[char] ? result[char]++ : (result[char] = 1)
  );
  return result;
};

const anagram = (str1 = "", str2 = "") => {
  let strLength1 = Object.keys(wordCount(str1)).length;
  let strLength2 = Object.keys(wordCount(str2)).length;

  if (strLength1 != strLength2) return false;

  let result = Object.keys(wordCount(str1)).every(
    (char) => wordCount(str2)[char] === wordCount(str1)[char]
  );
  console.log("hello", result);
};

console.log(anagram("Hi there", "Bye there"));

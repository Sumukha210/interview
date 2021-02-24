const isPalindrome = (str) => {
  let i = str.length - 1;
  let reversedString = "";

  //   while (i >= 0) {
  //     reversedString += str[i];
  //     i--;
  //   }

  for (i; i >= 0; i--) {
    reversedString += str[i];
  }

  return str === reversedString ? true : false;
};

//o(n)

console.log(isPalindrome("ollo"));

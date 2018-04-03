/* Write a function `isPalindrome()` to determine whether an input string is a palindrome or not 

A palindrome is a word, phrase, number, or other sequence of characters which 
reads the same backward as forward, such as madam or racecar. 

`input` will be a single string without spaces and punctuation. */
const isPalindrome = input => {
  return (
    input
      .split("")
      .filter((element, idx) => element !== input[input.length - 1 - idx])
      .length === 0
  );
  //   return filterArray.length === 0;

  //   const mid = input.length / 2;
  //   for (let idx = 0; idx < mid; idx++) {
  //     if (input[idx] !== input[input.length - 1 - idx]) {
  //       return false;
  //     }
  //   }
  //   return true;
};

module.exports = isPalindrome;

const isPalindrome = require("../src/isPalindrome");

describe("Palindrome tests", () => {
  describe("Even number of text", () => {
    it("should return true for empty", () => {
      expect(isPalindrome("")).toEqual(true);
    });
    it("should return true for aa", () => {
      expect(isPalindrome("aa")).toEqual(true);
    });
    it("should return false for ab", () => {
      expect(isPalindrome("ab")).toEqual(false);
    });
    it("should return true for abba", () => {
      expect(isPalindrome("abba")).toEqual(true);
    });
    it("should return false for abca", () => {
      expect(isPalindrome("abca")).toEqual(false);
    });
    it("should return false for umbrella", () => {
      expect(isPalindrome("umbrella")).toEqual(false);
    });
  });
  describe("Odd number of text", () => {

    it("should return true for a", () => {
      expect(isPalindrome("a")).toEqual(true);
    });
    it("should return true for abc", () => {
      expect(isPalindrome("abc")).toEqual(false);
    });
    it("should return true for tacocat", () => {
      expect(isPalindrome("tacocat")).toEqual(true);
    });
    it("should return true for racecar", () => {
      expect(isPalindrome("racecar")).toEqual(true);
    });
  });
});

// Test cases: actual --> expected
// isPalindrome('') --> true
// isPalindrome('a') --> true
// isPalindrome('ab') --> false
// isPalindrome('abc') --> false
// isPalindrome('abba') --> true
// isPalindrome('tacocat') --> true
// isPalindrome('racecar') --> true
// isPalindrome('umbrella') --> false

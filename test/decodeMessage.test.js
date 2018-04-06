const decodeMessage = require("../src/decodeMessage");

describe("Decode Message", () => {
  describe("Single character", () => {
    it("should return z for input a", () => {
      expect(decodeMessage("a")).toEqual("z");
    });
    it("should return a for input z", () => {
      expect(decodeMessage("z")).toEqual("a");
    });
    it("should return y for input b", () => {
      expect(decodeMessage("b")).toEqual("y");
    });
    it("should return b for input y", () => {
      expect(decodeMessage("y")).toEqual("b");
    });
  });
  describe('longer chars', () => {
    it('should return zy for input ab', () => {
        expect(decodeMessage('ab')).toEqual('zy');
    });
    it('should return hi for input sr', () => {
        expect(decodeMessage('sr')).toEqual('hi');
    });
    it('should return hello for input svool', () => {
        expect(decodeMessage('svool')).toEqual('hello');
    });
    it('should return this message for input gsrh nvhhztv', () => {
        expect(decodeMessage('gsrh nvhhztv')).toEqual('this message');
    });
    it('should return i hope nobody decodes this message for input r slkv mlylwb wvxlwvh gsrh nvhhztv', () => {
        expect(decodeMessage('r slkv mlylwb wvxlwvh gsrh nvhhztv')).toEqual('i hope nobody decodes this message');
    });
  });
});

// Test cases: actual --> expected
// decodeMessage("a") --> "z"
// decodeMessage("z") --> "a"
// decodeMessage("b") --> "y"
// decodeMessage("y") --> "b"
// decodeMessage("ab") --> "zy"
// decodeMessage("sr") --> "hi"
// decodeMessage("svool") --> "hello"

// decodeMessage("gsrh nvhhztv") --> "this message"
// decodeMessage("r slkv mlylwb wvxlwvh gsrh nvhhztv") --> "i hope nobody decodes this message"

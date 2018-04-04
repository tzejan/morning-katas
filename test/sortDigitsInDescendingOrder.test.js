// Test cases: actual --> expected
// sortDigitsInDescendingOrder(21445) --> 54421
// sortDigitsInDescendingOrder(145263) --> 654321
// sortDigitsInDescendingOrder(1254859723) --> 9875543221

const sortDigitsInDescendingOrder = require("../src/sortDigitsInDescendingOrder");

describe("Sort Digits", () => {
  it("should return a digit when the length is 1", () => {
    expect(sortDigitsInDescendingOrder(1)).toEqual(1);
  });

  it("should return 21 for input of 12", () => {
    expect(sortDigitsInDescendingOrder(12)).toEqual(21);
  });

  it('should return 54321 for input of 12345', () => {
    expect(sortDigitsInDescendingOrder(12345)).toEqual(54321);
  });

  it('should return 54321 for input of 21453', () => {
    expect(sortDigitsInDescendingOrder(21453)).toEqual(54321);
  });

  it('should return 54421 for input of 21445', () => {
    expect(sortDigitsInDescendingOrder(21445)).toEqual(54421);
  });

  it('should return 654321 for input of 145263', () => {
    expect(sortDigitsInDescendingOrder(145263)).toEqual(654321);
  });

  it('should return 9875543221 for input of 1254859723', () => {
    expect(sortDigitsInDescendingOrder(1254859723)).toEqual(9875543221);
  });
});

/* Your task is to make a function that can take any non-negative integer 
as a argument and return it with its digits in descending order. 
Essentially, rearrange the digits to create the highest possible number. */

const sortDigitsInDescendingOrder = (digits) => {
    const arrayOfStrings = digits.toString().split('');
    arrayOfStrings.sort((a,b) => {
        return b-a;
    });
    return parseInt(arrayOfStrings.join(''));
}

module.exports = sortDigitsInDescendingOrder
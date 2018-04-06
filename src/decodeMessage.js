/* Write a function to decode a given input string.
Each letter is paired with the letter that it coincides with when the alphabet is reversed.
For example: "a" is encoded with "z", "b" with "y", "c" with "x", etc
Spaces are not encoded/decoded. For example: "gsrh nvhhztv" will be decoded as "this message"
*/

const decodeMessage = (string) => {
    const lookup = "zyxwvutsrqponmlkjihgfedcba";
    return string.split("").map(char => char === ' '? ' ' : lookup[char.charCodeAt() - 97]).join("");
};

module.exports = decodeMessage;
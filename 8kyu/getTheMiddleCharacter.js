
// ❓DESCRIPTIONS
//You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.
//
// If the string's length is odd, return the middle character.
// If the string's length is even, return the middle 2 characters.
// Examples:
// "test" --> "es"
// "testing" --> "t"
// "middle" --> "dd"
// "A" --> "A"
// 👌TESTS
//describe("GetMiddle", function() {
//     const { assert } = require('chai');
//
//     function doTest(input, expected) {
//         const message = `for input ${JSON.stringify(input)}\n`;
//         const actual = getMiddle(input);
//         assert.strictEqual(actual, expected, message);
//     }
//
//     it("Sample Tests", function() {
//         doTest("test", "es");
//         doTest("testing", "t");
//         doTest("middle", "dd");
//         doTest("A", "A");
//     });
// });
// 😤SOLUTION

function getMiddle(s) {
    const lenght = s.length;
    const middleIndex = Math.floor(lenght / 2);
    if (lenght % 2 === 1) {
        return s.charAt(middleIndex);
    } else {
        return s.substring(middleIndex - 1, middleIndex + 1)
    }
}

console.log(getMiddle('rsrrw'))
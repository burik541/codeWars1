// ❓DESCRIPTIONS
// Given an array of integers as strings and numbers, return
// the sum of the array values as if all were numbers.
//
// Return your answer as a number.

// 👌TESTS
//   assert.strictEqual(sumMix([9, 3, '7', '3']), 22);
//     assert.strictEqual(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42);
//     assert.strictEqual(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41);

// 😤SOLUTION
function sumMix(x) {
    let count = 0;
    x.forEach(el => count += Number(el));
    return count;
}

console.log(sumMix([1, '2', 3, '3']))
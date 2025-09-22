
 // ❓DESCRIPTIONS
 // Complete the method that takes a boolean value and return
 // a "Yes" string for true, or a "No" string for false.
 // 👌TESTS
 // assert.strictEqual(boolToWord(true), 'Yes')
 // assert.strictEqual(boolToWord(false), 'No')

 // 😤SOLUTION
 function boolToWord( bool ){
     return bool ? 'Yes': 'No'
 }

 console.log(boolToWord(true))
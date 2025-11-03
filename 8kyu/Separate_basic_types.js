
 // ❓DESCRIPTIONS
 //Given: a sequence of different type of values (number, string, boolean).
 // You should return an object with a separate properties
 // for each of types presented in input. Each property should contain an array
 // of corresponding values.
 //
 // keep order of values like in input array
 // if type is not presented in input, no corresponding property are expected
 // So, for this input:
 //
 // ['a', 1, 2, false, 'b']
 // expected output is:
 //
 // {
 //   number: [1, 2],
 //   string: ['a', 'b'],
 //   boolean: [false]
 // }

 // 👌TESTS
//  describe("separateTypes", function() {
 //   it("given ['a', 1, 2, false, 'b']", function() {
 //     assert.deepEqual(separateTypes(['a', 1, 2, false, 'b']), {number: [1, 2],  string: ['a', 'b'], boolean: [false]});
 //   });
 //
 //   it("given ['a', 1, 2 ]", function() {
 //     assert.deepEqual(separateTypes(['a', 1, 2 ]), {number: [1, 2],  string: ['a']});
 //   });
 // 😤SOLUTION
 function separateTypes(input) {
    const result = {};
    const numbers = input.filter(item => typeof item === 'number');
    if (numbers.length > 0) {
        result.number = numbers;
    }
    const strings = input.filter(item => typeof item === 'string');
    if (strings.length > 0) {
        result.string = strings;
    }
    const booleans = input.filter(item => typeof item === 'boolean');
    if (booleans.length > 0) {
        result.boolean = booleans;
    }

     return result
 }

 console.log(separateTypes(['a', 1, 2, false, 'b']))
 console.log(separateTypes(['a', 1, 2 ]))

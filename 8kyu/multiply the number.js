
 // ❓DESCRIPTIONS
 // Jack really likes his number five: the trick here is that
 // you have to multiply each number by 5 raised to the number
 // of digits of each numbers, so, for example:
 //
 // 3 -->    15  (  3 * 5¹)
 // 10 -->   250  ( 10 * 5²)
 // 200 --> 25000  (200 * 5³)
 // 0 -->     0  (  0 * 5¹)
 // -3 -->   -15  ( -3 * 5¹)
 // 👌TESTS
 // it("multiply(10)", () => {
 //     assert.strictEqual(multiply(10), 250);
 // });
 //
 // it("multiply(0)", () => {
 //     assert.strictEqual(multiply(0), 0);
 // });
 //
 // it("multiply(-2)", () => {
 //     assert.strictEqual(multiply(-2), -10);
 // });

 // 😤SOLUTION
 function multiply(number){
    //itsMyCode
    let a = String(number);
    let b = a.replace('-', '');
    return  number * Math.pow(5, b.length);
    //bestCode
     return number * Math.pow(5, Math.abs(number).toString().length);
 }


 console.log(multiply(-3))

 // ❓DESCRIPTIONS
 //It's the academic year's end, fateful moment of your school report.
 // The averages must be calculated.
 // All the students come to you and entreat you to calculate their average for them.
 // Easy ! You just need to write a script.
 //
 // Return the average of the given array rounded down to its nearest integer.
 //
 // The array will never be empty.

 // 👌TESTS
//Test.assertEquals(getAverage([2,2,2,2]),2);
 // Test.assertEquals(getAverage([1,2,3,4,5,]),3);
 // Test.assertEquals(getAverage([1,1,1,1,1,1,1,2]),1);
 // 😤SOLUTION
 function getAverage(marks){
    return Math.floor(marks.reduce((a, b) => a + b) / marks.length)
     //TODO : calculate the downward rounded average of the marks array
 }

 console.log(getAverage([7,6,10,4]))
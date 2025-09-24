
 // ❓DESCRIPTIONS
 //Write a function that adds a named property to an object.
 // It must be possible to set the property to a new value.
 // If the property already exists on the object, and error should be thrown.

 // 👌TESTS
//  it("Should set the value of the property", function() {
 //     Test.expect(obj.name === "Palle");
 // 😤SOLUTION
 function addProperty(obj, prop, value) {
    if (obj.hasOwnProperty(prop)) {
        throw new Error(`Property "${prop}" already exists on the object.`)
    }
    obj[prop] = value
     // Add your code here
 }
 const myObj = { a: 1 };

 addProperty(myObj, 'c', 2);
 console.log(myObj); // { a: 1, b: 2 }

 addProperty(myObj, 'a', 3);
 // Throws Error: Property "a" already exists on the object.
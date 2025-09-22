
 // ❓DESCRIPTIONS
 // Create a combat function that takes the player's current health
 // and the amount of damage received,
 // and returns the player's new health. Health can't be less than 0.
 // 👌TESTS
 //  Test.assertEquals(combat(100, 5), 95);
 //  Test.assertEquals(combat(92, 8), 84);
 //  Test.assertEquals(combat(20, 30), 0, "Health cannot go below 0");

 // 😤SOLUTION
 function combat(health, damage) {
    //myCode
let battle = health - damage
     return battle > 0 ? battle : 0


     //bestCode
     return health < damage ? 0 : health - damage
 }

 console.log(combat(100, 11))
/*
In the exercise below, write your own code where indicated
to achieve the desired result.

Make sure to run the file with node in your command line.
*/

//-------------------
// Part 1: Syntax and Naming Conventions
//-------------------

// For each prompt:
  // Write a class skeleton
  // Create 2 object instances and store in variables
  // Log each variable to the console.
  // You do not need any proerties at this time!!

// Prompt 1: Dog
class Dog{

}
var dyna = new Dog;
var max = new Dog;
console.log(dyna);
console.log(max);
// Prompt 2: Snack
class Snack{

}
var craisins = new Snack;
var sourCreamAndOnionChips = new Snack;
console.log(craisins);
console.log(sourCreamAndOnionChips);
// Prompt 3: Shirt
class Shirt{

}
var niceShirt = new Shirt;
var exerciseShirt = new Shirt;
console.log(niceShirt);
console.log(exerciseShirt);
//-------------------
// Part 2: Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Assign 3 properties (names and values of your choice) to each class
  // Create an object instance and store in variable
  // Log that variable to the console.

// Prompt 1: Dog
class NewDog{
  constructor() {
    this.eyeColor = "brown";
    this.furLength = "short";
    this.hasLongTail = true;
  }
}
var dyna = new NewDog()
console.log(dyna);
// Prompt 2: Snack
class Snacks{
  constructor() {
    this.color = "crimson";
    this.flavor = "tangy";
    this.hasSugar = true;
  }
}
var craisins = new Snacks()
console.log(craisins);
// Prompt 3: Shirt
class Shirts{
  constructor() {
    this.color = "blue";
    this.hasSleeves = false;
    this.isBreathable = true;
  }
}
var exerciseShirt = new Shirts()
console.log(exerciseShirt);
//-------------------
// Part 3: Dynamic Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Declare 3 parameters in the consutructor
  // Assign 3 properties (names and values of your choice), using the parameters
  // Create 2 object instances and store in variables (passing in different arguments)
  // Log those variables to the console.

// Prompt 1: Dog
class NewDogs{
  constructor(eyeColor, furLength, hasLongTail) {
    this.eyeColor = eyeColor;
    this.furLength = furLength;
    this.hasLongTail = hasLongTail;
  }
}
var max = new NewDogs("brown", "long", true);
var wert = new NewDogs("blue and brown", "medium", false);
console.log(max);
console.log(wert);
// Prompt 2: Snack
class NewSnacks{
  constructor(color,flavor, hasSugar) {
    this.color = color;
    this.flavor = flavor;
    this.hasSugar = hasSugar;
  }
}
var craisins = new NewSnacks("crimson", "tangy", true);
var cheetos = new NewSnacks("orange", "cheesy", true);
console.log(craisins);
console.log(cheetos);
// Prompt 3: Shirt
class NewShirts{
  constructor(color, hasButtons, hasCollar) {
    this.color = color;
    this.hasButtons = hasButtons;
    this.hasCollar = hasCollar;
  }
}
var polo1 = new NewShirts("Blue", true, true);
var workShirt = new NewShirts("red", false, false);
console.log(polo1);
console.log(workShirt);

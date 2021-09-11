// Challenge - See if you can follow the instructions and complete the exercise in under 30 minutes!

// Declare two variables - heroName AND specialAbility - set to strings
var heroName = "Blazing Flame";
var specialAbility = "Towering Inferno";
// Declare two variables - greeting AND catchphrase

//   greeting should be assigned to a string that uses concatenation to include the heroName
var greeting = "The day is light! I'm " + heroName;
//   catchphrase should be assigned to a string that uses interpolation to include the specialAbility
var catchphrase = `Flame On! ${specialAbility}!`
// Declare two variables - power AND energy - set to integers
var power = 55;
var energy = 95;
// Declare two variables - fullPower AND fullEnergy
//   fullPower should multiply your current power by 500
var fullPower = power * 500;
//   fullEnergy should add 150 to your current energy
var fullEnergy = energy + 150;
// Declare two variables - isHuman and identityConcealed - assigned to booleans
var isHuman = false;
var identityConcealed = true;
// Declare two variables - archEnemies AND sidekicks
//   archEnemies should be an array of at least 3 different enemy strings
var archEnemies = ["Watermelon", "Deoxygenator", "The Poofer"];
//   sidekicks should be an array of at least 3 different sidekick strings
var sidekicks = ["Spark", "Ember", "Coalboy"];
// Print the first sidekick to your console
console.log(sidekicks[0]);
// Print the last archEnemy to the console
console.log(archEnemies[2]);
// Write some code to add a new archEnemy to the archEnemies array
archEnemies.push("Halony")
// Print the archEnemies array to console to ensure you added a new archEnemy
console.log(archEnemies);
// Remove the first sidekick from the sidekicks array
sidekicks.shift()
// Print the sidekicks array to console to ensure you added a new sidekick
console.log(sidekicks);
// Create a function called assessSituation that takes three arguments - dangerLevel, saveTheDay, badExcuse
var badExcuse = "I just remembered I left the refrigerator open! I must close it before the milk spoils! Goodbye!";
var saveTheDay = `Don't fear ${heroName} is here, and I will burn this problem to the ground!`

function assessSituation(dangerLevel, saveTheDay, badExcuse){
  if (dangerLevel > 50) {
    console.log(badExcuse);
  } else if (dangerLevel <= 50 && dangerLevel >=10) {
    console.log(saveTheDay);
  } else if (dangerLevel < 10) {
    console.log("Meh. Hard pass.");
  }
};
//   - dangerLevel should be an integer
//   - saveTheDay should be a string a hero would say once they save the day
//   - badExcuse should be a string a hero would say if they are too afraid of the dangerLevel

// Your function should include an if/else statement that meets the following criteria
//   - Danger levels that are above 50 are too scary for your hero. Any danger level that is above 50 should result in printing the badExcuse to the console
//   - Anything dangerLevel that is between 10 and 50 should result in printing the saveTheDay string to the console
//   - If the dangerLevel is below 10, it means it is not worth your time and should result in printing the string "Meh. Hard pass." to the console.

//Test Cases
var announcement = 'Never fear, the Courageous Curly Bracket is here!';
var excuse = 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.';
// assessSituation(99, announcement, excuse) > Should print - 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.'
assessSituation(99, saveTheDay, badExcuse)
//assessSituation(21, announcement, excuse) > should print - 'Never fear, the Courageous Curly Bracket is here!'
assessSituation(21, saveTheDay, badExcuse)
//assessSituation(3, announcement, excuse) > should print - "Meh. Hard pass."
assessSituation(3,saveTheDay, badExcuse)
// Declare a new variable - scaryMonster - assigned to an Object with the following key/values
//   - name (string)
//   - smell (string)
//   - weight (integer)
//   - citiesDestroyed (array)
//   - luckyNumbers (array)
//   - address (object with following key/values: number , street , state, zip)
var address = {
  number: 34593,
  street: "34th street NE",
  state: "NY",
  zip: 10008,
  }

var scaryMonster = {
  name: "Blizzard",
  smell: "Minty",
  weight: 32,
  citiesDestroyed: ["Reykjavik", "Sapporo", "Vorkuta"],
  luckyNumbers: [7, 12, 72],
  address: address,
  }

// Create a new class called SuperHero
class SuperHero {
  constructor(name, superpower, age) {
    this.name = name;
    this.superpower = superpower;
    this.age = age;
    this.archNemesis = "The Syntax Error";
    this.powerLevel = 100;
    this.energyLevel = 50;
  }
  sayName(name){
    console.log(this.name);
  }
  maximizeEnergy(energyLevel) {
    this.energyLevel = 1000;
    console.log(this.energyLevel);
  }
  gainPower(powerLevel) {
    console.log(7 * this.powerLevel);
  }
}

// - Your class should have the following DYNAMIC values
//   - name
//   - superpower
//   - age
// - Your class should have the following STATIC values
//   - archNemesis, assigned to "The Syntax Error"
//   - powerLevel = 100
//   - energyLevel = 50

// - Create the following class methods
//   - sayName, should print the hero's name to the console
//   - maximizeEnergy, should update the energyLevel to 1000
//   - gainPower, should take an argument of a number and INCREASE the powerLevel by that number

// - Create 2 instances of your SuperHero class
var bob = new SuperHero("Bob", "Bobbing", 15)
var blinder = new SuperHero("Blinder", "Ignoring what is in front of them", 83)


// Reflection
// What parts were most difficult about this exerise?
//What was most difficult for me was realizing how quickly I lost the information.
// What parts felt most comfortable to you?
//The classes felt most comfortable for me since they were the last bit I studied.
// What skills do you need to continue to practice before starting Mod 1?
//All of them.  Lots of rewriting notes, and organizing to do.

/*
This exercise file is a little different from the others you have seen so far. Read carefully!

Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
Spend some time changing the variables and running the file to see how the story changes.
*/

var doorChoice = 1;
var bearClothing = "";
var bearChoice = 1;

console.log("You enter a dark room with two doors. Do you go through #1 or #2?");

if (doorChoice === 1) {
  bearClothing = "hat";
} else {
  bearClothing = "scarf";
}

console.log("You see a bear putting on a " + bearClothing);
console.log("It looks like that " + bearClothing + " is too small for the bear, do you...");

console.log("1. Offer your own to the bear?");
console.log("2. Point it out to the bear?");
console.log("3. Make a dash for the next room?");

if (bearChoice === 1) {
  console.log("You offer the bear your " + bearClothing + " and the bear shows you a secret passage out!");
} else if (bearChoice === 2) {
  console.log("You tell the bear the " + bearClothing + " is too small and it starts to cry!");
} else if (bearChoice === 3) {
  console.log("You run as fast as you can into the next room. It's full of snakes!");
} else {
  console.log("You stay with the bear and become it's best friend!");
}

/*
Questions

1. In English, using technical vocabulary, describe what is happening between lines 14 and 18.
An if...else conditional statement is between lines 14 and 18. It says that if doorChoice === 1, then "hat" is assigned to bearClothing
If the first condition evaluates as false, then "scarf" will be assigned to bearClothing.
2. What variable has a new value assigned to it after the first if statement executes?
bearClothing
3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
It will be a scarf.
4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
An if...else conditional statement with additional else if is being evaluated between lines 27 and 35.
If line 27 evaluates as true then line 28 runs, if it evaluates as false the code moves to the next else if statement on line 29.
If line 29 evaluates as true then line 30 runs, if it evaluates as false the code moves to the next else if statement on line 31.
If line 31 evaluates as true then line 32 runs.
If lines 27, 29, and 31 evaluate as false then the else runs on line 34.
5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
If you changed bear choice to equal three than line 32 runs and you run into a room full of snakes.
6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
The final outcome will be that you point out that the hat is too small and make the bear cry.
7. What is your favorite ending?
My favorite ending is where I offer my clothes to the bear and it shows me the way out.
*/

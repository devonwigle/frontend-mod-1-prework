// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
function buildABear(name, age, fur, clothes, specialPower) { //create a function that takes name, age, fur, clothes, specialPower as parameters
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`; //interpolate name of bear into greeting
  var demographics = [name, age]; //create a variable with name and age in an array
  var powerSaying = "Did you know that I can " + specialPower + " ?"; //concatenate specialPower variable into powerSaying
  var builtBear = { //build an object for the bear
    basicInfo: demographics, //demographics array will be value to basicInfo key
    clothes: clothes, //clothes will be the value to the clothes key.  Can take an array
    exterior: fur, // fur will be the value to the exterior key
    cost: 49.99, // Cost of the bear is 49.99
    sayings: [greeting, powerSaying, "Goodnight my friend!"], //an array with the greeting, powerSaying, "Goodnight my friend" will be value for sayings key
    isCuddly: true, // it is true that the bear is cuddly
  };

  return builtBear //displays object builtBear with all its values
}

buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares'); //calling function buildABear with these arguments
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in'); //calling function buildABear with these arguments



//FizzBuzz
function fizzBuzz(num1, num2, range) { //creating a function called fizzBuzz that has two numbers and a range as parameters
  for (var i = 0; i <= range; i++) { //defining the incrementation, starts at 0, goes through the range, then adds one
    if (i % num1 === 0 && i % num2 === 0) { //performs this if remainder i divided by num1 is 0 and if i divided by num2 has a remainder of 0
      console.log('fizzbuzz'); //logs 'fizzbuzz' to the console if statement is true
    } else if (i % num1 === 0) { // if if-statement not true, test else-if statement.  If i divided by num1 has a remainder of 0, execute code
      console.log('fizz'); //logs 'fuzz' to the console if else-if statement is true
    } else if (i % num2 === 0) { //if prior else-if statement not true test statement. If i divided by num2 has a remainder of 0, execute code
      console.log('buzz'); //logs 'buzz' to the console if else-if statement is true
    } else { //run else statement if all others evaluate as false.
      console.log(i); //logs i to the console
    }
  }
}

fizzBuzz(3, 5, 100); //calls fizzBuzz function for arguments 3,5,100
fizzbuzz(5, 8, 400); //calls fizzBuzz function for arguments 5,8,400

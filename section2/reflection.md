## Section 2 Reflection

1. Regarding the blog posts in Part A, how do you feel about asking questions? Do you tend to ask them too soon, or wait too long, or somewhere in between?
I feel pretty comfortable asking questions, someone has to ask them. I have a mix asking too soon and waiting too long. It depends on how tired I am, how personally invested I am in the project, and if I have been successful after asking questions before.

1. In this section, we removed some of the supports that you had in Section 1. We didn't give the directions for how to run a file in node, and really sent you off to learn about functions by exploring several outside resources. How did that feel? What was uncomfortable about it? How did it support your learning?
I felt fine with this more hands-off approach. It gives me more opportunity to practice what I learn instead of rote repetition. Information from multiple sources is always a benefit as it shows that there is consensus in the community about a way of doing things, or it gives multiple perspectives on how to approach a topic.  I was very comfortable with this and I think it supports my learning by encouraging me to branch out in my sources.

1. What is a conditional statement? Give one example of a daily life conditional. Give one example of where a conditional is probably used in a web application you use.
A conditional statement is a statement where a decision is made and different responses can be displayed based on the decision. An example in daily life would be as follows:
    Statement: Do I have any clean clothes?
    Decision1: Yes then _I wear the clean clothes_.
    Decision2: No, _do laundry now_.
An example in a web application would be as follows:
    Statement: Would you like to save 10% on your first order?
    Decision1: Yes, I would. _Takes me to e-mail subscription page_.
    Decision2: No, I would not. _Are you sure you don't want to save 10% on your order today?_

1. How do you add multiple conditions to an `if` statement? In your own words, explain how to program reads them and determines what to do.
In order to add multiple conditions to an if statement, I need to add an `else if` code block.  The code would read the first if condition and evaluate it as true or false.  If it is found to be false the code would move to the next `else if` statement.  It would evaluate it as true or false, if true it would execute the code it dictates, if not it would move to the next `else if` statement. This would repeat until a condition evaluated as true or their were no more conditions to evaluate.

1. What tools are available to you, as a developer, if you want to check that TWO conditions are met? Or, if you want to check that 1 of 2 conditions are met, before running a block of code?
A developer can use logical operators, AND`&&` and OR `||`, to evaluate whether conditions are met. `&&` evaluates if both conditions are true. `||` evaluates whether 1 of 2 conditions is true.

1. What questions do you still have about `if` statements and/or functions?
Can you write a conditional statement that uses both AND and OR for two separate conditions? Like in the pizza example, where you can't make pizza with 1 cup of flour regardless of if you have sauce or not. I tried the following which did not print an error but also did not run the console.log().
```JavaScript
if (cupsOfFlour === 1 &&& (hasSauce === true || hasSauce ===false) {
  console.log("I cannot make pizza");
}
```

/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(author, content, timeStamp, numberOfLikes, comments) {
    this.author = author;
    this.content = content;
    this.timeStamp = timeStamp;
    this.numberOfLikes = numberOfLikes;
    this.comments = comments;
  }
  addLikes() {
    this.numberOfLikes += 1;
  }
  addComments(comments) {
    this.comments.push(comments);
  }
}
var rock = new Tweet("Sarah", "Found a rock today!", 202109090903, 12, ["What a cute kitty!"]);
console.log(rock);
var tablet = new Tweet("Erin", "My tablet died!", 202109090735, 2, "Should have plugged it in!");
console.log(tablet);
rock.addComments ("Where did you find it?");
console.log(rock);
tablet.addLikes("Erin", "My tablet died!", 202109090735, 2, "Should have plugged it in!");
console.log(tablet);
tablet.addLikes()
console.log(tablet);

# Learn-JavaScript

A series of coding projects to help me understand Asynchronous Programming

# Notes

A promise is a commitment to an event, which has two possible likelihoods. One, it gets resolved, two it fails.

### Pros

- Promises are really good for running things in the background if they are going to take a long time.

## Side Notes

In JS, there is a concept called first class citizenship. This means functions get treated like any other object. Therefore, I function can be:

- You can assign a function to a variable
- You can add a function to an array
- You can assign a function as a property to an object. These are called methods
- You can assign a property to a function
- You can pass a function as an argument. The concept is called Callbacks
- You can return a function from a function

if you assign a function to a variable, it becomes a variable expression.

# Keywords

### then

Since JS Promises don't take any arguments we first call the function and use the then keyword to signify what happens next after the promise has been returned

### all

Groups multiple promises into an array and allows each item/process in the array to be completed in parallel with each other without waiting for one to finish

### race

Maybe there is something you want to do straight after you complete one task. It'll return the first one completed.

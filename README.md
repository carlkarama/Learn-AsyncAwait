# Learn-JavaScript

A series of coding projects to help me understand Asynchronous Programming

# Notes

A promise is a commitment to an event, which has two possible likelihoods. One, it gets resolved, two it fails.

### Pros

- Promises are really good for running things in the background if they are going to take a long time.

# Promises Architectural Overview

![Promises Architecture](Promises/stock/images/Screen%20Shot%202022-10-21%20at%2010.56.47%20am.png)

# Keywords

### pending

This means a promise is yet to be resolved or rejected

### resolve

This means the promise is successful

### rejected

This means a promise is uncessful

### then

What happens after a promise is resolved. Since JS Promises don't take any arguments we first call the function and use the then keyword to signify what happens next after the promise has been returned

### catch

If a promise is rejected, an error handler is implemented which logs a message

### all

Groups multiple promises into an array and allows each item/process in the array to be completed in parallel with each other without waiting for one to finish

### race

Maybe there is something you want to do straight after you complete one task. It'll return the first one completed.

### finally

The last function called after a resolve or rejection has been completed.

## Side Notes

In JS, there is a concept called first class citizenship. This means functions get treated like any other object. Therefore, I function can be:

- You can assign a function to a variable
- You can add a function to an array
- You can assign a function as a property to an object. These are called methods
- You can assign a property to a function
- You can pass a function as an argument. The concept is called Callbacks
- You can return a function from a function

if you assign a function to a variable, it becomes a variable expression.

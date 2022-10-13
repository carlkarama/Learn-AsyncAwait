# Arrow Functions

These are shorthand ways of writing conventional functions. Take for instance the following example below

```
function sum(a, b) {
    return a + b
}
```

The steps to change it to an arrow function are below.

1. Remove the 'function' keyword

```
sum(a, b) {}
```

2. Assign the function to a variable

```
let sum = (a,b) {}
```

3. Add an arrow to denote that the parameters on the left are going to be used by everyting within the curly braces.

```
let sum = (a, b) => {}
```

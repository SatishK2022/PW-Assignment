// Write a function called "multipleNumbers" that takes 2 numbers as arguments and returns their product. Use function expressions to define the function and call the function before it is declared to demonstrate hoisting.

console.log(multiplyNumbers(4,5));

let multiplyNumbers = (a, b) => {
    return a*b;
}
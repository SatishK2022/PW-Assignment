// write a function that takes 2 numbers as arguments and returns their sum. Declare a variable inside the function using the VAR keyword and log its value to the console before it is assigned a value to demonstrate variable hoisting.

console.log(sum(2,4));

function sum(a, b){
    var c;
    console.log(c);
    c = 10;
    return a+b;
}
// first

let string = "some test string";
let value;
value = string[0];
value = string[string.length - 1];

// second

value = string[0].toUpperCase() + string.slice(1);
value = string.slice(0, -1) + string[string.length - 1].toUpperCase();

// third

value = string.indexOf("string");

// fourth

value = string.lastIndexOf(" ");

// five
value = string.slice(5);
// six
value = string.slice(5, 9);
// seven
value = string.slice(0, -6);
// eight
let a = 20;
let b = 16;
value = String(a) + (b);
console.log(value);

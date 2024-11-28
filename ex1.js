const num = 2;
let number = 0;
number = Number(num % 2 == 0) + Number(num % 3 == 0) + Number(num % 5 == 0);
console.log(number);

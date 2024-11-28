/*
Authors: Or Ben David, Sahar Weisbrot

This program is calculating if a certain number (num) can be divided by 2,3 and 5.
if it is divided by 1 of them - return 1.
if it is divided by 2 of them - return 2.
if it is divided by all of them - return 3.
else - return 0.
*/
const num = 30;
let number = 0;
number = Number(num % 2 == 0) + Number(num % 3 == 0) + Number(num % 5 == 0);
console.log(number);

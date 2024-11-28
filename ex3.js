/*
Authors: Or Ben David, Sahar Weisbrot

This program will find and print the number of 0's in a given arr.*/

const arr = [7, 0, 12, 5, 0, 234000, 7, 4, 0, 68];
let count = 0;
arr.forEach(function (num) {
  num == 0 ? (count += 1) : (count = count);
});
console.log(count);

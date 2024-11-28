/*
Authors: Or Ben David, Sahar Weisbrot

This program is printing all the prime numbers between 2 and "number".
*/

const number = 237;
for (let i = 2; i < number; i++) {
  if (isPrime(i) == true) console.log(i);
}

/*
This function get a given number and return true if its an prime number. 
else - returns false.
*/
function isPrime(number) {
  if (number == 2) return true;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i == 0) return false;
  }
  return true;
}

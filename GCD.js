// find the greatest common divisor of the two numbers given

const gcd = function(a, b) {

  if(a < b) {
    [a, b] = [b, a];
  }

   while (a % b != 0) {
      let remainder = a % b;
      a = b;
      b = remainder;
   }

  return `GCD is ${b}`;

}

console.log(gcd(120, 1000)); //returns 40
console.log(gcd(210, 45)); //returns 15
console.log(gcd(550, 150)); //returns 50
console.log(gcd(8,4)); //returns 4

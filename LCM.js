// find the lowest common multiple of two given numbers

const lcm = function(x, y) {
  
  if(x < y) {
    [x, y] = [y, x];
  }

  const gcd = function(a, b) {

     while (a % b != 0) {
        let remainder = a % b;
        a = b;
        b = remainder;
     }
  
    return b;
  
  }

  return ((x * y)/gcd(x, y));

}

console.log(lcm(36, 12)); //returns 36
console.log(lcm(45, 210)); //returns 630
console.log(lcm(52, 620)); //returns 8060
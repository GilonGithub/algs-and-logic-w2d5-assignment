// check if a given number is prime. return true or false. 

const isPrime = function(num) {

  for(i = 2; i <= Math.floor(Math.sqrt(num)); i++){
    if(num % i === 0){
      return false;
    } else {
      return true;
    }
  }

}

console.log(isPrime(5)); //true
console.log(isPrime(6)); //false
console.log(isPrime(13)); //true
console.log(isPrime(28)); //false
console.log(isPrime(201)); //true
console.log(isPrime(3120)); //false

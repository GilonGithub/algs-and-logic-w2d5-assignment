// generate a list of prime numbers from 2 up to a value, n
// you can use the Sieve of Eratosthenes method to do this. 

const primeGenerator = function(n) {
  let arr = [];

  for(i = 2; i <= n; i++) {
    arr.push(i);
  }


  for(i = 0; i < arr.length; i++){

    for(j = i; j < arr.length; j++){
      if(j !== i && arr[j] % arr[i] === 0){
        arr.splice(j, 1); 
      }
    }
  }

  return arr;
}

console.log(primeGenerator(200));
// returns
// 2,   3,   5,   7,  11,  13,  17,  19,  23,
// 29,  31,  37,  41,  43,  47,  53,  59,  61,  67,
// 71,  73,  79,  83,  89,  97, 101, 103, 107, 109,
// 113, 127, 131, 137, 139, 149, 151, 157, 163, 167,
// 173, 179, 181, 191, 193, 197, 199

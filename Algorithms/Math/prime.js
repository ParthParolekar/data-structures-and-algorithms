function isPrime(num) {
  if (num === 0 || num === 1) {
    return false;
  }

  if (num === 2) {
    return true;
  }

  //First approach - Loop from 2 to num
  // Big-O = O(n) or Linear

  //   for (let i = 2; i < num; i++) {
  //     if (num % i === 0) {
  //       return false;
  //     }
  //   }

  //   If a numbers is composite(or not prime), the divisor can be found at less than
  //   or equal to the number's(num) sqaure root.

  //Second approach - Loop from 2 to sqaure root of num
  // Big-O = O(sqrt(n))

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(25)); //false
console.log(isPrime(27)); //false
console.log(isPrime(23)); //true

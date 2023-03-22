function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  }

  let result = 1;

  for (let i = 1; i <= num; i++) {
    result = result * i;
  }
  return result;
}

console.log(factorial(6));

//Big-O = O(n) or Linear

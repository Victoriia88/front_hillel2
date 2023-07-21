function createSumFunction() {
  let currentSum = 0;

  return function sum(value) {
    currentSum += value;
    return currentSum;
  };
}

const sum = createSumFunction();

console.log(sum(3));
console.log(sum(5));
console.log(sum(20));

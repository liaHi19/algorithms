//The process in which a function calls itself directly or indirectly is called recursion and the corresponding function is called a recursive function.

// 1)	Terminates when the base case becomes true.
// 2)	Used with functions.	Used with loops.
// 3)	Every recursive call needs extra space in the stack memory.
// 4)	Smaller code size.

// Recursion	Iteration
// 1) Terminates when the condition becomes false.
// 2) Used with loops.
// 3) Every iteration does not require any extra space.
// 4) Larger code size.

// Write a program and recurrence relation to find the Fibonacci series of n where n>2 .

function fib(n) {
  if (n === 0) return 0;
  if (n === 1 || n === 2) return 1;
  else return fib(n - 1) + fib(n - 2);
}

// console.log(fib(6));

// sum of elements
function sum(x) {
  if (x.length === 0) return;
  if (x.length === 1) return x[0];
  let first = x.shift();
  return first + sum(x);
}

// console.log(sum([1, 2, 5]));

//the biggest number
function findBigNumber(x) {
  if (x.length === 0) return;
  if (x.length === 1) return x[0];
  if (x.length == 2) {
    return x[0] > x[1] ? x[0] : x[1];
  }
  let first = x.shift();
  return first > findBigNumber(x) ? first : findBigNumber(x);
}

// console.log(findBigNumber([1, 2, 5]));

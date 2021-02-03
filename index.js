// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

let number = 10

function findFactorialRecursive(number) {
  //code here
  if(number === 0) return 0
  if(number === 1) return 1
  if(number >= 2){
    return number * findFactorialRecursive( number -1)
  }
}

// function findFactorialIterative(number) {
//   //code here
//   for(i = number - 1; i > 0; i--){
//     number *= i
//   }
//   return number;
// }

// findFactorialIterative(number)
findFactorialRecursive(number)
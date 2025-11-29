console.log("--------------------------------------febinocci-----------------------------------------------------------");
//febinocci Big(O) ==> O(n)
function febinocci(n) {
  let feb = [0, 1];
  for (i = 2; i < n; i++) {
    feb[i] = feb[i - 1] + feb[i - 2];
  }
  return feb;
}

console.log(febinocci(7));


console.log("--------------------------------------febinocci recursion------------------------------------------------");
//O(2^n) //only give the sum

function recurssiveFebinocci(n) {
  if (n < 2) {
    return n;
  }
  return recurssiveFebinocci(n-1) + recurssiveFebinocci(n-2)
}

console.log(recurssiveFebinocci(7));


// =============================================== to get the array like febinocci: 

function febrecursion (n) {
  if(n === 1) return [0]
  if(n === 2) return [0,1]

  let arr = febrecursion(n-1)
  arr.push(arr[arr.length-1] + arr[arr.length-2])

  return arr
}
console.log(febrecursion(7));


// //working
// function fib6() { //5+3 ==8
//     return fib5() + fib4();
// }

// function fib5() { //3+2 ==5
//     return fib4() + fib3();
// }

// function fib4() { //2+1 ==3
//     return fib3() + fib2();
// }

// function fib3() { //1+1 ==2
//     return fib2() + fib1();
// }

// function fib2() { //1+0 == 1
//     return fib1() + fib0();
// }

// function fib1() { //1
//     return 1;
// }

// function fib0() { //0
//     return 0;
// }

// console.log(fib6())


console.log("--------------------------------------factorial-----------------------------------------------------------");
//factorial Big(O) ==> O(n)
function factorial(n) {
  result = 1;
  for (i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(factorial(5));



console.log("--------------------------------------factorial recursive--------------------------------------------------");
// big-O = O(n)
function recursiveFactorial(n){
    if (n === 0){
        return 1
    }
    return n * recursiveFactorial(n-1)
}

console.log(factorial(5));


console.log("--------------------------------------prime---------------------------------------------------------------");
//prime  Big(O) ==> O(sqrt(n))
function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {  //if i < n as the updation then the B(o) = O(n)
    if (n % i === 0) return false;
  }
  return true;
}

console.log(isPrime(2));


console.log("--------------------------------------prime recursion-----------------------------------------------------------");

function isPrime(n, i=2) {
  if(n<2) return false
  if(n > Math.sqrt(n)) return true

  if(n%i === 0) return false

  return isPrime(n, i+1)
}


console.log("--------------------------------------power of 2-----------------------------------------------------------");
//power of 2  O(log n)
function isPowerOfTwo(n) {

  if (n < 1) {  /// not 0 n neg nums
    return false;
  }
  if(n === 1) return true//not required

  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
}

console.log(isPowerOfTwo(9));

// power of 2 recursion ==============================================

function recursivePowerOfTwo (num) {
  if (num < 1) return false
  if (num === 1) return true
  if (num%2 !== 0) return false

  return recursivePowerOfTwo(num/2)
}


console.log("--------------------------------------power of 2 bitwise---------------------------------------------------------");
//constant big(O) ==> O(1)
function isPowerOfTwoBitwise(n) {
  if (n < 1) {
    return false;
  }
  return (n & (n - 1)) === 0;
}

console.log(isPowerOfTwoBitwise(16));

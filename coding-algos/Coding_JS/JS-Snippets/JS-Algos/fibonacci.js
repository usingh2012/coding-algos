const fibIterative = (n) => {
    if(n <= 1){
        return 0;
    }
     if(n === 2){
         return 1;
     }
     //const sumArr = [0, 1];
     let sum = 0, prev = 1, beforePrev = 0;
     for (let i = 3; i <= n; i++){
         //let sum1 = sumArr[i - 2] + sumArr[i - 1];
         sum = prev + beforePrev;
         beforePrev = prev;
         prev = sum;
     }
     console.log(`Fib for ${n} is ${sum}`);
     return sum;
}
const sumArr = [];
const fibReccursive = (n) => {
    if (n <= 1) {
        return 0;
    }
    if (n === 2) {
        return 1;
    }
    if (typeof sumArr[n] !== 'undefined') {
        return sumArr[n];
    }
    sumArr[n] = fibReccursive(n - 1) + fibReccursive(n - 2);
    return sumArr[n];
}

fibIterative(7);
console.log(`The fib recursive value is ${fibReccursive(7)}`);
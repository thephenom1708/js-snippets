// Non tail-recursive function
const factorial = (num) => {
    if(num === 0) {
        return 1;
    }
    /* More work left to do after recursive call, so JS Engine will need to store frame for each function call
    * And if very large number is given, it will lead to stack-overflow
    * Stacktrace remains intact
     */
    return num * factorial(num -1);
}
console.log('\nNon Tail-Recursive Implementation:')
console.table([
    {
        number: 4,
        factorial: factorial(4)
    },
    {
        number: 10,
        factorial: factorial(10)
    },
    {
        number: 1000,
        factorial: factorial(1000)
    }
]);

// Tail-recursive function
const tailRecursiveFactorial = (num) => {
    if(num === 0) {
        return 1;
    }
    /* No more work left to do after recursive call, so JS Engine will not store frame for each function call
    * Hence, will never lead to stack-overflow
    * But the con is, here we will lose the stacktrace
     */
    return num * tailRecursiveFactorial(num -1);
}
console.log('\nTail-Recursive Implementation:')
console.table([
    {
        number: 4,
        factorial: tailRecursiveFactorial(4)
    },
    {
        number: 10,
        factorial: tailRecursiveFactorial(10)
    },
    {
        number: 1000,
        factorial: tailRecursiveFactorial(1000)
    }
]);


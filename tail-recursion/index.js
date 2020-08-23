// Non tail-recursive function
const factorial = (num) => {
    if(num === 0) {
        return 1;
    }
    return num * factorial(num -1); // More work left to do after recursive call
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


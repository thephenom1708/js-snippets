const multiply = (num1, num2) => {
    return num1 * num2;
}

// Method-1: Currying Using "bind"
const multiplyByTwo = multiply.bind(this, 2);
const twoMultiplyByThree = multiplyByTwo(3);
const twoMultiplyByFive = multiplyByTwo(5);
const twoMultiplyByTwelve = multiplyByTwo(12);
console.log('Method-1: Currying Using "bind"\n');
console.table([
    {
        expression: '2 * 3',
        result: twoMultiplyByThree
    }, {
        expression: '2 * 5',
        result: twoMultiplyByFive
    }, {
        expression: '2 * 12',
        result: twoMultiplyByTwelve
    }
]);

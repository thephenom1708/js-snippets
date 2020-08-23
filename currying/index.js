const multiplyUsingBind = (num1, num2) => {
    return num1 * num2;
}

// Method-1: Currying Using "bind"
const multiplyByTwo = multiplyUsingBind.bind(this, 2);
const twoMultipliedByThree = multiplyByTwo(3);
const twoMultipliedByFive = multiplyByTwo(5);
const twoMultipliedByTwelve = multiplyByTwo(12);

console.log('\nMethod-1: Currying Using "bind"\n');
console.table([
    {
        expression: '2 * 3',
        result: twoMultipliedByThree
    }, {
        expression: '2 * 5',
        result: twoMultipliedByFive
    }, {
        expression: '2 * 12',
        result: twoMultipliedByTwelve
    }
]);

// Method-2: Currying Using function closures
const multiplyUsingClosure = (num1) => {
    return (num2) => {
        return num1 * num2;
    }
}
const multiplyByFour = multiplyUsingClosure(4);
const fourMultipliedByFive = multiplyByFour(5);
const fourMultipliedBySeven = multiplyByFour(7);
const fourMultipliedByTen = multiplyByFour(10);

console.log('\nMethod-2: Currying Using "function closures"');
console.table([
    {
        expression: '4 * 5',
        result: fourMultipliedByFive
    }, {
        expression: '4 * 7',
        result: fourMultipliedBySeven
    }, {
        expression: '4 * 10',
        result: fourMultipliedByTen
    }
]);
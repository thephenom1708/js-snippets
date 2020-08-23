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

// Advanced Generic Currying implementation for multi-argument functions
function curry(func) {
    return function curried(...args) {
        if (args.length >= func.length) {
            return func.apply(this, args);
        } else {
            return function (...args2) {
                return curried.apply(this, args.concat(args2));
            }
        }
    };
}

const sum = (num1, num2, num3) => {
    return num1 + num2 + num3;
}
const curriedSum = curry(sum);

console.log('\nAdvance generic currying for multi-argument functions:\n');
console.log('Normal currying call:', curriedSum(1, 2, 3)); // 6, still callable normally
console.log('Currying of 1st argument:', curriedSum(1)(2, 3)); // 6, currying of 1st arg
console.log('Full Currying for each argument:', curriedSum(1)(2)(3)); // 6, full currying

const defaultValue = 5;
let recentNumber = defaultValue;

function add(num1, num2) {
    const result = num1 + num2;
    return result;
}

recentNumber = add(3, 7);
let numberString = '(' + defaultValue + ' + 15) * 4';
outputResult(recentNumber, numberString);
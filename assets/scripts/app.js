const defaultValue = 5;
let recentNumber = defaultValue;

function add(num1, num2) {
    const result = num1 + num2;
    alert('Result is ' + result);
}
add(4, 7);
add(5, 5);

recentNumber = (recentNumber + 15) * 4;
let numberString = '(' + defaultValue + ' + 15) * 4';
outputResult(recentNumber, numberString);
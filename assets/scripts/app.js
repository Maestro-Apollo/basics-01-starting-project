const defaultValue = 0;
let recentNumber = defaultValue;
let myArray = [];

function getEnterNumber() {
    return parseInt(userInput.value);
}

function objectFunction(number, operator, previous, result) {
    const referObject = {
        number: number,
        operator: operator,
        previous: previous,
        result: result,
    };
    myArray.push(referObject);
    console.log(myArray);
}

function readAndWrite(operator, beforeOutput, finalResult) {
    const resultDescription = `${beforeOutput} ${operator} ${finalResult}`;
    outputResult(recentNumber, resultDescription);
}

function add() {
    const enterNumber = getEnterNumber();
    const initNumber = recentNumber;
    recentNumber = recentNumber + enterNumber;
    readAndWrite('+', initNumber, enterNumber);
    objectFunction(enterNumber, 'ADD', initNumber, recentNumber);
}

function sub() {
    const enterNumber = getEnterNumber();
    const initNumber = recentNumber;
    recentNumber = recentNumber - enterNumber;
    readAndWrite('-', initNumber, enterNumber);
    objectFunction(enterNumber, 'SUB', initNumber, recentNumber);
}

function multi() {
    const enterNumber = getEnterNumber();
    const initNumber = recentNumber;
    recentNumber = recentNumber * enterNumber;
    readAndWrite('*', initNumber, enterNumber);
    objectFunction(enterNumber, 'MULTI', initNumber, recentNumber);
}

function divide() {
    const enterNumber = getEnterNumber();
    const initNumber = recentNumber;
    recentNumber = recentNumber / enterNumber;
    readAndWrite('/', initNumber, enterNumber);
    objectFunction(enterNumber, 'DIVIDE', initNumber, recentNumber);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', sub);
multiplyBtn.addEventListener('click', multi);
divideBtn.addEventListener('click', divide);
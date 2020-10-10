const defaultValue = 0;
let recentNumber = defaultValue;

function getEnterNumber() {
    return parseInt(userInput.value);
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
}

function sub() {
    const enterNumber = getEnterNumber();
    const initNumber = recentNumber;
    recentNumber = recentNumber - enterNumber;
    readAndWrite('-', initNumber, enterNumber);
}

function multi() {
    const enterNumber = getEnterNumber();
    const initNumber = recentNumber;
    recentNumber = recentNumber * enterNumber;
    readAndWrite('*', initNumber, enterNumber);
}

function divide() {
    const enterNumber = getEnterNumber();
    const initNumber = recentNumber;
    recentNumber = recentNumber / enterNumber;
    readAndWrite('/', initNumber, enterNumber);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', sub);
multiplyBtn.addEventListener('click', multi);
divideBtn.addEventListener('click', divide);
const defaultValue = 0;
let recentNumber = defaultValue;
let myArray = [];

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
    const referObject = {
        number: enterNumber,
        operator: 'Add',
        previous: initNumber,
        result: recentNumber,
    };
    myArray.push(referObject);
    console.log(myArray);
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
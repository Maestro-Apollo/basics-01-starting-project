const defaultValue = 0;
let recentNumber = defaultValue;

function add() {
    recentNumber = recentNumber + userInput.value;
    outputResult(recentNumber, '');
}

addBtn.addEventListener('click', add);
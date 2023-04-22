const x = 0
let currentResult = x
let logEntries = [];
// users input value
function getUserNumberInput() {
    return parseInt(usrInput.value)
}
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`
    outputResult(currentResult, calcDescription) // from vendor.js (result, text)
}
function writeToLog(operationLog, prevResult, number, resultLog) {
    let logEntry = {
        operation: operationLog,
        prevResult: prevResult,
        userNumber: number,
        result: resultLog
    };
    logEntries.push(logEntry)
    console.log(logEntries)
}
function calculateResult(calculationType) {
    const enteredNumber = getUserNumberInput()
    const initialResult = currentResult
    let mathOperator;
    if (calculationType !== 'ADD' && calculationType !== 'SUBTRACT' && calculationType !== 'MULTIPLY' && calculationType !== 'DIVIDE' || !enteredNumber) {
        return;
    }
    if (calculationType === 'ADD') {
        currentResult += enteredNumber
        mathOperator = '+'
    } else if (calculationType === 'SUBTRACT') {
        currentResult -= enteredNumber
        mathOperator = '-'
    } else if (calculationType === 'MULTIPLY') {
        currentResult *= enteredNumber
        mathOperator = '*'
    } else if (calculationType === 'DIVIDE') {
        calculateResult /= enteredNumber
        mathOperator = '/'
    } {
        createAndWriteOutput(mathOperator, initialResult, enteredNumber)
        writeToLog(calculationType, initialResult, enteredNumber, currentResult)
    }
}
function add() {
    calculateResult('ADD')
}
function subtract() {
    calculateResult('SUBTRACT')
}
function multiply() {
    calculateResult('MULTIPLY')
}
function divide() {
    calculateResult('DIVIDE')
}
addBtn.addEventListener('click', add)
subtractBtn.addEventListener('click', subtract)
multiplyBtn.addEventListener('click', multiply)
divideBtn.addEventListener('click', divide)
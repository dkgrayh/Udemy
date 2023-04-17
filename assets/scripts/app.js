//test 17/04/23
const x = 0
let currentResult = x
let logEntries = [];
// users input value
function getUserNumberInput(){
    return parseInt(usrInput.value)
} 

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber){
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

function add() {
    const enteredNumber = getUserNumberInput()
    const initialResult = currentResult
    currentResult += enteredNumber
    createAndWriteOutput('+', initialResult, enteredNumber)
    writeToLog('ADD', initialResult, enteredNumber, currentResult)
}

function subtract() {
    const enteredNumber = getUserNumberInput()
    const initialResult = currentResult
    currentResult -= enteredNumber
    createAndWriteOutput('-', initialResult, enteredNumber)
    writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult)

} 

function multiply() {
    const enteredNumber = getUserNumberInput()
    const initialResult = currentResult
    currentResult *= enteredNumber
    createAndWriteOutput('*', initialResult, enteredNumber)
    writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult)

}

function divide() {
    const enteredNumber = getUserNumberInput()
    const initialResult = currentResult 
    currentResult /= enteredNumber
    createAndWriteOutput('/', initialResult, enteredNumber)
    writeToLog('DIVIDE', initialResult, enteredNumber, currentResult)

}

addBtn.addEventListener('click', add)
subtractBtn.addEventListener('click', subtract)
multiplyBtn.addEventListener('click', multiply)
divideBtn.addEventListener('click', divide)



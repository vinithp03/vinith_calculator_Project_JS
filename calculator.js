//calculator.js
let expression = '';
let currentDisplay = '';

function appendToDisplay(value) {
    currentDisplay += value;
    expression += value;
    updateDisplay();
}

function clearDisplay() {
    currentDisplay = '';
    expression = '';
    updateDisplay();
    clearResult(); // Clear the result as well
}

function clearResult() {
    document.getElementById('result').textContent = '';
    document.getElementById('result').classList.remove('result-show');
}

function backspace() {
    currentDisplay = currentDisplay.slice(0, -1);
    expression = expression.slice(0, -1);
    updateDisplay();
}

function calculate() {
    try {
        const result = eval(currentDisplay);
        const roundedResult = roundToFiveDecimals(result);
        document.getElementById('expression').classList.add('expression-result');
        document.getElementById('result').classList.add('result-show');
        document.getElementById('result').textContent = roundedResult;
    } catch (error) {
        clearDisplay();
        document.getElementById('result').textContent = 'Error';
    }
}

function roundToFiveDecimals(number) {
    return Math.round(number * 1e5) / 1e5;
}

function updateDisplay() {
    document.getElementById('expression').textContent = expression;
}
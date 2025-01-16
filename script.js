let displayValue = '';

function clearDisplay() {
    displayValue = '';
    updateDisplay();
}

function removeLastCharacter() {
    displayValue = displayValue.slice(0, -1);
    updateDisplay();
}

function appendNumber(number) {
    displayValue += number;
    updateDisplay();
}

function appendOperator(operator) {
    displayValue += operator;
    updateDisplay();
}

function appendPercentage() {
    if (displayValue !== '') {
        displayValue = (parseFloat(displayValue) / 100).toString();
        updateDisplay();
    }
}

function calculate() {
    try {
        displayValue = eval(displayValue).toString();
    } catch (e) {
        displayValue = 'Error';
    }
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('result').value = displayValue;
}

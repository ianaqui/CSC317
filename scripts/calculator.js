// State variables
let displayValue = '0';
let firstOperand = null;
let waitingForSecondOperand = false;
let operator = null;

// Screen elements
const display = document.getElementById('output');
const calculationDisplay = document.querySelector('.calculation');

// Update screen
const updateDisplay = () => {
    if (displayValue.length > 10) {
        const numberValue = parseFloat(displayValue);
        display.textContent = numberValue.toExponential(6);
    } else {
        display.textContent = displayValue;
    }
};

// Add digit
const inputDigit = (digit) => {
    if (waitingForSecondOperand) {
        displayValue = digit;
        waitingForSecondOperand = false;
    } else {
        displayValue = displayValue === '0' ? digit : displayValue + digit;
    }
};

// Add decimal
const inputDecimal = () => {
    if (!displayValue.includes('.')) {
        displayValue += '.';
    }
};

// Handle operator
const handleOperator = (nextOperator) => {
    const inputValue = parseFloat(displayValue);

    if (operator && waitingForSecondOperand) {
        operator = nextOperator;
        return;
    }

    if (firstOperand === null) {
        firstOperand = inputValue;
    } else if (operator) {
        const result = calculate(firstOperand, inputValue, operator);

        if (!isFinite(result)) {
            displayValue = 'Error';
        } else {
            displayValue = String(result);
            firstOperand = result;
        }
    }

    waitingForSecondOperand = true;
    operator = nextOperator;
};

// Calculate result
const calculate = (firstOperand, secondOperand, operator) => {
    switch (operator) {
        case '+': return firstOperand + secondOperand;
        case '-': return firstOperand - secondOperand;
        case '×': return firstOperand * secondOperand;
        case '÷': return secondOperand === 0 ? Infinity : firstOperand / secondOperand;
        default: return secondOperand;
    }
};

// Reset calculator
const resetCalculator = () => {
    displayValue = '0';
    firstOperand = null;
    waitingForSecondOperand = false;
    operator = null;
    calculationDisplay.textContent = '';
};

// Convert to percentage
const handlePercentage = () => {
    const value = parseFloat(displayValue) / 100;
    displayValue = String(value);
};

// Toggle sign
const toggleSign = () => {
    displayValue = String(-1 * parseFloat(displayValue));
};

// Equals operation
const handleEquals = () => {
    if (!operator) return;

    const inputValue = parseFloat(displayValue);
    const result = calculate(firstOperand, inputValue, operator);

    if (!isFinite(result)) {
        displayValue = 'Error';
    } else {
        displayValue = String(result);
    }

    calculationDisplay.textContent = `${firstOperand} ${operator} ${inputValue}`;
    firstOperand = result;
    waitingForSecondOperand = false;
    operator = null;
    updateDisplay();
};

// Number button events
document.querySelectorAll('.number-button').forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent === '.') {
            inputDecimal();
        } else {
            inputDigit(button.textContent);
        }
        updateDisplay();
    });
});

// Operation button events
document.querySelectorAll('.operation-button').forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent === '=') {
            handleEquals();
        } else {
            handleOperator(button.textContent);
        }
        updateDisplay();
    });
});

// Utility button events
document.getElementById('clear').addEventListener('click', () => {
    resetCalculator();
    updateDisplay();
});

document.getElementById('sign').addEventListener('click', () => {
    toggleSign();
    updateDisplay();
});

document.getElementById('percent').addEventListener('click', () => {
    handlePercentage();
    updateDisplay();
});

// Keyboard support
document.addEventListener('keydown', (event) => {
    if (/^\d$/.test(event.key)) {
        inputDigit(event.key);
        updateDisplay();
    } else if (event.key === '.') {
        inputDecimal();
        updateDisplay();
    } else if (['+', '-'].includes(event.key)) {
        handleOperator(event.key);
        updateDisplay();
    } else if (event.key === '*') {
        handleOperator('×');
        updateDisplay();
    } else if (event.key === '/') {
        event.preventDefault();
        handleOperator('÷');
        updateDisplay();
    } else if (event.key === '=' || event.key === 'Enter') {
        handleEquals();
        updateDisplay();
    } else if (event.key === 'Escape' || event.key === 'c') {
        resetCalculator();
        updateDisplay();
    }
});

// Start up
updateDisplay();
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    
    if (b === 0) {
        return 'ERROR';
    } else {
        return a / b;
    }
}

function operate(action, a, b) {

    a = parseFloat(a);
    b = parseFloat(b);

    console.log(a);
    console.log(b);
    console.log(action);
    
    if (action === '+') {
        return parseFloat(add(a, b).toFixed(4));
    } else if (action === '-') {
        return parseFloat(subtract(a, b).toFixed(4));
    } else if (action === 'x') {
        return parseFloat(multiply(a, b).toFixed(4));
    } else if (action === '/') {
        return parseFloat(divide(a, b).toFixed(4));
    } else {
        return 'ERROR ENTER A VALID OPERATOR'
    }

}

let displayValue = 'GO SUNS';
let memory;
let operandOne;
let operandTwo;
let operator;
let disableOperator = false;
let allowNegative = false;
let allowDecimal = true;

function populate(num) {

    if (displayValue === 'GO SUNS') {
        if (num === 'clear') {
            document.querySelector('.screen').textContent = ''; 
            displayValue = '';
            memory = displayValue;
        } else {
            document.querySelector('.screen').textContent = `${num}`;
            displayValue = num;
            memory = displayValue;
        }
    } else if (num === 'clear') {
        document.querySelector('.screen').textContent = '';
        displayValue = '';
        memory = '';
        operandOne = '';
        operandTwo = '';
        operator = '';
        disableOperator = false;
    } else if (num === '+') {
        if (!disableOperator) {
            document.querySelector('.screen').textContent = `${displayValue}${num}`;
            displayValue = displayValue + `${String(num)}`;
            operandOne = memory;
            memory = '';
            operator = '+';
            disableOperator = true;
            allowNegative = true;
            allowDecimal = true;
        }
    } else if (num === '-' && displayValue != '') {
        if (!disableOperator || allowNegative) {
            document.querySelector('.screen').textContent = `${displayValue}${num}`;
            displayValue = displayValue + `${String(num)}`;

            if (allowNegative) {
                memory = '-';
                allowNegative = false;
            } else {
                operandOne = memory;
                memory = '';
                operator = '-';
                allowDecimal = true;
            }
            disableOperator = true;

        }
    } else if (num === '/') {
        if (!disableOperator) {
            document.querySelector('.screen').textContent = `${displayValue}${num}`;
            displayValue = displayValue + `${String(num)}`;
            operandOne = memory;
            memory = '';
            operator = '/';
            disableOperator = true;
            allowNegative = true;
            allowDecimal = true;
        }
    } else if (num === 'x') {
        if (!disableOperator) {
            document.querySelector('.screen').textContent = `${displayValue}${num}`;
            displayValue = displayValue + `${String(num)}`;
            operandOne = memory;
            memory = '';
            operator = 'x';
            disableOperator = true;
            allowNegative = true;
            allowDecimal = true;
        }
    } else if (num === '=') {
        operandTwo = memory;
        let result = operate(operator, operandOne, operandTwo);
        document.querySelector('.screen').textContent = `${result}`;
        memory = result;
        displayValue = result;
        operandOne = '';
        operandTwo = '';
        operator = '';
        disableOperator = false;
        allowDecimal = true;
    } else {
        if (num === '.' && allowDecimal) {
            document.querySelector('.screen').textContent = `${displayValue}${num}`;
            displayValue = displayValue + `${String(num)}`;
            memory = memory + `${String(num)}`;
            if (operator != '') {
                allowNegative = false;
            }
            allowDecimal = false;
        } else if (num != '.') {
            document.querySelector('.screen').textContent = `${displayValue}${num}`;
            displayValue = displayValue + `${String(num)}`;
            memory = memory + `${String(num)}`;
            if (operator != '') {
                allowNegative = false;
            }
        }
    }
    
}

document.querySelector('.zero').addEventListener('click', () => {populate(0)});
document.querySelector('.one').addEventListener('click', () => {populate(1)});
document.querySelector('.two').addEventListener('click', () => {populate(2)});
document.querySelector('.three').addEventListener('click', () => {populate(3)});
document.querySelector('.four').addEventListener('click', () => {populate(4)});
document.querySelector('.five').addEventListener('click', () => {populate(5)});
document.querySelector('.six').addEventListener('click', () => {populate(6)});
document.querySelector('.seven').addEventListener('click', () => {populate(7)});
document.querySelector('.eight').addEventListener('click', () => {populate(8)});
document.querySelector('.nine').addEventListener('click', () => {populate(9)});
document.querySelector('.dot').addEventListener('click', () => {populate('.')});

document.querySelector('.ac').addEventListener('click', () => {populate('clear')});

document.querySelector('.plus').addEventListener('click', () => {populate('+')});
document.querySelector('.minus').addEventListener('click', () => {populate('-')});
document.querySelector('.slash').addEventListener('click', () => {populate('/')});
document.querySelector('.x').addEventListener('click', () => {populate('x')});

document.querySelector('.equals').addEventListener('click', () => {populate('=')});


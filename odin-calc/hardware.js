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
    
    if (action === '+') {
        add(a, b);
    } else if (action === '-') {
        subtract(a, b);
    } else if (action === '*') {
        multiply(a, b);
    } else if (action === '/') {
        divide(a, b);
    } else {
        return 'ERROR ENTER A VALID OPERATOR'
    }

}
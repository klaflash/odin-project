let color = '#585b5a';
let click = false;

function fillBoard(size) {
    let board = document.querySelector('.container');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        let square = document.createElement('div');
        square.style.backgroundColor = "#bfc2c3";
        square.addEventListener('mouseover', colorSquare);
        board.insertAdjacentElement('afterbegin', square);
    }   
}

fillBoard(120);

function changeSize(size) {
    if (size < 2 || size > 200) {
        alert('Size must be less than 201 & greater than 1');
    } else {
        fillBoard(size);
    }
}

function colorSquare() {
    if (click) {
        if (color === 'random') {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        } else {
            this.style.backgroundColor = color;
        }
    }
}

function changeColor(input) {
    color = input;
}

function reset() {
    let board = document.querySelector('.container');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor = '#bfc2c3');
}

document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.tagName != 'BUTTON' && e.target.tagName != 'IMG') {
        click = !click
    }
});
    

let popup = document.getElementById("settings");
function openSettings() {
    popup.classList.add("open-settings")
}

function closeSettings() {
    popup.classList.remove("open-settings");
}


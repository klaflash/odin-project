function fillBoard(size) {
    let board = document.querySelector('.container');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        let square = document.createElement('div');
        square.style.backgroundColor = "gray";
        square.style.border = "0.5px solid red";
        board.insertAdjacentElement('afterbegin', square);
    }   
}

fillBoard(16);

function changeSize(size) {
    if (size < 2 || size > 100) {
        alert('Size must be less than 101 & greater than 1');
    } else {
        fillBoard(size);
    }
}


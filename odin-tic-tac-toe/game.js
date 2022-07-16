const gameboard = (() => {

    const _board = [' ',' ',' ',' ',' ',' ',' ',' ',' '];

    let _currentPlay = true;

    const render = () => {

        for (let i = 0; i < _board.length; i++) {

            _renderSquare(i);
        }
    };

    const _renderSquare = (i) => {

        let temp = '';

        switch (i) {
            
            case 0:
                temp = document.querySelector('.zero');
                break;
            case 1:
                temp = document.querySelector('.one');
                break;
            case 2:
                temp = document.querySelector('.two');
                break;
            case 3:
                temp = document.querySelector('.three');
                break;
            case 4:
                temp = document.querySelector('.four');
                break;
            case 5:
                temp = document.querySelector('.five');
                break;
            case 6:
                temp = document.querySelector('.six');
                break;
            case 7:
                temp = document.querySelector('.seven');
                break;
            case 8:
                temp = document.querySelector('.eight');
                break;
        }

        temp.textContent = _board[i];
    };

    const listen = () => {

        document.querySelector('.zero').addEventListener('click', () => {
            if (_board[0] === ' ') {
                if (_currentPlay) {
                    _board[0] = 'x';
                } else {
                    _board[0] = 'o';
                }
                _currentPlay = !_currentPlay;
                render();
            }
        });

        document.querySelector('.one').addEventListener('click', () => {
            if (_board[1] === ' ') {
                if (_currentPlay) {
                    _board[1] = 'x';
                } else {
                    _board[1] = 'o';
                }
                _currentPlay = !_currentPlay;
                render();
            }
        });

        document.querySelector('.two').addEventListener('click', () => {
            if (_board[2] === ' ') {
                if (_currentPlay) {
                    _board[2] = 'x';
                } else {
                    _board[2] = 'o';
                }
                _currentPlay = !_currentPlay;
                render();
            }
        });

        document.querySelector('.three').addEventListener('click', () => {
            if (_board[3] === ' ') {
                if (_currentPlay) {
                    _board[3] = 'x';
                } else {
                    _board[3] = 'o';
                }
                _currentPlay = !_currentPlay;
                render();
            }
        });

        document.querySelector('.four').addEventListener('click', () => {
            if (_board[4] === ' ') {
                if (_currentPlay) {
                    _board[4] = 'x';
                } else {
                    _board[4] = 'o';
                }
                _currentPlay = !_currentPlay;
                render();
            }
        });

        document.querySelector('.five').addEventListener('click', () => {
            if (_board[5] === ' ') {
                if (_currentPlay) {
                    _board[5] = 'x';
                } else {
                    _board[5] = 'o';
                }
                _currentPlay = !_currentPlay;
                render();
            }
        });

        document.querySelector('.six').addEventListener('click', () => {
            if (_board[6] === ' ') {
                if (_currentPlay) {
                    _board[6] = 'x';
                } else {
                    _board[6] = 'o';
                }
                _currentPlay = !_currentPlay;
                render();
            }
        });

        document.querySelector('.seven').addEventListener('click', () => {
            if (_board[7] === ' ') {
                if (_currentPlay) {
                    _board[7] = 'x';
                } else {
                    _board[7] = 'o';
                }
                _currentPlay = !_currentPlay;
                render();
            }
        });

        document.querySelector('.eight').addEventListener('click', () => {
            if (_board[8] === ' ') {
                if (_currentPlay) {
                    _board[8] = 'x';
                } else {
                    _board[8] = 'o';
                }
                _currentPlay = !_currentPlay;
                render();
            }
        });
    }

    return {render, listen};
})();

const player = (name) => {

    const sayName = () => {
        console.log(name);
    };

    return {sayName};
}

const gameFlow = () => {
    
    const doSomething = () => {

    };

    return {doSomething};
}


gameboard.render();
gameboard.listen();
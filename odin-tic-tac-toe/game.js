const gameboard = (() => {

    const _board = [' ',' ',' ',' ',' ',' ',' ',' ',' '];

    let _currentPlay = true;

    const render = () => {

        for (let i = 0; i < _board.length; i++) {

            _renderSquare(i);
        }
        
        const winner = _checkWinner();

        if (winner === 'x') {
            document.querySelector('.winner').textContent = "x wins!";
        } else if (winner === 'o') {
            document.querySelector('.winner').textContent = "o wins!";
        } else {

            if (_checkFull()) {
                document.querySelector('.winner').textContent = "Draw!";
            }

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
                _turn();
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
                _turn();
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
                _turn();
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
                _turn();
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
                _turn();
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
                _turn();
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
                _turn();
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
                _turn();
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
                _turn();
            }
        });
    }

    const _turn = () => {
        if (_currentPlay) {
            document.querySelector('.turn').textContent = 'Waiting for x';
        } else {
            document.querySelector('.turn').textContent = 'Waiting for o'; 
        }
    };

    const _checkWinner = () => {

        //row 1
        if (_board[0] === _board[1] && _board[1] === _board[2]) {
            if (_board[0] === 'x') {
                document.querySelector('.zero').style.cssText = 'background-color:rgb(149, 224, 139);'
                document.querySelector('.one').style.cssText = 'background-color:rgb(149, 224, 139);'
                document.querySelector('.two').style.cssText = 'background-color:rgb(149, 224, 139);'
                return 'x';
            } else if (_board[0] === 'o') {
                document.querySelector('.zero').style.cssText = 'background-color:rgb(149, 224, 139);'
                document.querySelector('.one').style.cssText = 'background-color:rgb(149, 224, 139);'
                document.querySelector('.two').style.cssText = 'background-color:rgb(149, 224, 139);'
                return 'o';
            }
        }

        //row 2
        if (_board[3] === _board[4] && _board[4] === _board[5]) {
            if (_board[3] === 'x') {
                document.querySelector('.three').style.cssText = 'background-color:rgb(149, 224, 139);'
                document.querySelector('.four').style.cssText = 'background-color:rgb(149, 224, 139);'
                document.querySelector('.five').style.cssText = 'background-color:rgb(149, 224, 139);'
                return 'x';
            } else if (_board[3] === 'o') {
                document.querySelector('.three').style.cssText = 'background-color:rgb(149, 224, 139);'
                document.querySelector('.four').style.cssText = 'background-color:rgb(149, 224, 139);'
                document.querySelector('.five').style.cssText = 'background-color:rgb(149, 224, 139);'
                return 'o';
            }
        }

        //row 3
        if (_board[6] === _board[7] && _board[7] === _board[8]) {
            if (_board[6] === 'x') {
                document.querySelector('.six').style.cssText = 'background-color:rgb(149, 224, 139);'
                document.querySelector('.seven').style.cssText = 'background-color:rgb(149, 224, 139);'
                document.querySelector('.eight').style.cssText = 'background-color:rgb(149, 224, 139);'
                return 'x';
            } else if (_board[6] === 'o') {
                document.querySelector('.six').style.cssText = 'background-color:rgb(149, 224, 139);'
                document.querySelector('.seven').style.cssText = 'background-color:rgb(149, 224, 139);'
                document.querySelector('.eight').style.cssText = 'background-color:rgb(149, 224, 139);'
                return 'o';
            }
        }

        //column 1
        if (_board[0] === _board[3] && _board[3] === _board[6]) {
            if (_board[0] === 'x') {
                document.querySelector('.zero').style.cssText = 'background-color:rgb(149, 224, 139);'
                document.querySelector('.three').style.cssText = 'background-color:rgb(149, 224, 139);'
                document.querySelector('.six').style.cssText = 'background-color:rgb(149, 224, 139);'
                return 'x';
            } else if (_board[0] === 'o') {
                document.querySelector('.zero').style.cssText = 'background-color:rgb(149, 224, 139);'
                document.querySelector('.three').style.cssText = 'background-color:rgb(149, 224, 139);'
                document.querySelector('.six').style.cssText = 'background-color:rgb(149, 224, 139);'
                return 'o';
            }
        }

        //column 2
        if (_board[1] === _board[4] && _board[4] === _board[7]) {
            if (_board[1] === 'x') {
                document.querySelector('.one').style.cssText = 'background-color:rgb(149, 224, 139);'
                document.querySelector('.four').style.cssText = 'background-color:rgb(149, 224, 139);'
                document.querySelector('.seven').style.cssText = 'background-color:rgb(149, 224, 139);'
                return 'x';
            } else if (_board[1] === 'o') {
                document.querySelector('.one').style.cssText = 'background-color:rgb(149, 224, 139);'
                document.querySelector('.four').style.cssText = 'background-color:rgb(149, 224, 139);'
                document.querySelector('.seven').style.cssText = 'background-color:rgb(149, 224, 139);'
                return 'o';
            }
        }

        //column 3
        if (_board[2] === _board[5] && _board[5] === _board[8]) {
            if (_board[2] === 'x') {
                document.querySelector('.two').style.cssText = 'background-color:rgb(149, 224, 139);'
                document.querySelector('.five').style.cssText = 'background-color:rgb(149, 224, 139);'
                document.querySelector('.eight').style.cssText = 'background-color:rgb(149, 224, 139);'
                return 'x';
            } else if (_board[2] === 'o') {
                document.querySelector('.two').style.cssText = 'background-color:rgb(149, 224, 139);'
                document.querySelector('.five').style.cssText = 'background-color:rgb(149, 224, 139);'
                document.querySelector('.eight').style.cssText = 'background-color:rgb(149, 224, 139);'
                return 'o';
            }
        }

        //diagonal 1
        if (_board[0] === _board[4] && _board[4] === _board[8]) {
            if (_board[0] === 'x') {
                document.querySelector('.zero').style.cssText = 'background-color:rgb(149, 224, 139);'
                document.querySelector('.four').style.cssText = 'background-color:rgb(149, 224, 139);'
                document.querySelector('.eight').style.cssText = 'background-color:rgb(149, 224, 139);'
                return 'x';
            } else if (_board[0] === 'o') {
                document.querySelector('.zero').style.cssText = 'background-color:rgb(149, 224, 139);'
                document.querySelector('.four').style.cssText = 'background-color:rgb(149, 224, 139);'
                document.querySelector('.eight').style.cssText = 'background-color:rgb(149, 224, 139);'
                return 'o';
            }
        }

        //diagonal 2
        if (_board[2] === _board[4] && _board[4] === _board[6]) {
            if (_board[2] === 'x') {
                document.querySelector('.two').style.cssText = 'background-color:rgb(149, 224, 139);'
                document.querySelector('.four').style.cssText = 'background-color:rgb(149, 224, 139);'
                document.querySelector('.six').style.cssText = 'background-color:rgb(149, 224, 139);'
                return 'x';
            } else if (_board[2] === 'o') {
                document.querySelector('.two').style.cssText = 'background-color:rgb(149, 224, 139);'
                document.querySelector('.four').style.cssText = 'background-color:rgb(149, 224, 139);'
                document.querySelector('.six').style.cssText = 'background-color:rgb(149, 224, 139);'
                return 'o';
            }
        }

        
    };

    const _checkFull = () => {

        for (let i = 0; i < _board.length; i++) {
            if (_board[i] != 'x' && _board[i] != 'o') {
                return false;
            }
        }

        return true;
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
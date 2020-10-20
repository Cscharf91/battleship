import shipLengths from './shipLengths';

const Player = (type, board, enemyBoard) => {
    let moves = [];
    const getMoves = () => moves;
    const getBoard = () => board;
    const getEnemyBoard = () => enemyBoard;
    const cpuPlaceShips = () => {
        for (let i = 0; i < shipLengths.length; i++) {
            tryToPlaceShip(i);
        }
        // console.log(board.getGrid());
    }

    const tryToPlaceShip = (iteration) => {
        const length = shipLengths[iteration];
        const direction = Math.floor(Math.random() * (2 - 0)) > 0.5 ? 'horizontal' : 'vertical';
        const [x, y] = getRandomCoords(length, direction);
        board.placeShip(x, y, length, direction);
        // console.log(board.getCoords(x, y));
    }

    const makeRandomPlay = () => {
        let randomX = Math.floor(Math.random() * (10 - 0));
        let randomY = Math.floor(Math.random() * (10 - 0));
        let repeat;
        if (enemyBoard.getCoords(randomX, randomY) === 'X' || enemyBoard.getCoords(randomX, randomY) === 'XX') {
            makeRandomPlay();
        } else if (enemyBoard.receiveAttack(randomX, randomY) === 'Winner!') {
            console.log('WINNER!!');
            return 'win';
        } else {
            moves.push([randomX, randomY]);
        }
    }

    const getRandomCoords = (length, direction) => {
        let randomX = Math.floor(Math.random() * (10 - 0));
        let randomY = Math.floor(Math.random() * (10 - 0));
        while (!board.checkShipLength(randomX, randomY, length, direction)) {
            randomX = Math.floor(Math.random() * (10 - 0));
            randomY = Math.floor(Math.random() * (10 - 0));
        }
        return [randomX, randomY]; 
    }
    return { type, getBoard, getEnemyBoard, cpuPlaceShips, makeRandomPlay, getMoves }
}

export default Player;
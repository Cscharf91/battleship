import Ship from './Ship';

const Gameboard = (gridTemplate) => {
    let grid = gridTemplate;
    let ships = [];
    if (grid.length === 0) {
        for(let i = 0;  i < 10; i++) {
            grid.push([]);
            for(let j = 0; j < 10; j++) {
                grid[i].push('');
            }
        }
    }
    const getGrid = () => {
        return grid;
    }

    const getShips = () => ships;

    const checkShipLength = (x, y, length, direction) => {
        let freeSpace = true;
        if ((direction === 'horizontal' && x + length > 10) || (direction === 'vertical' && y + length > 10) || x > 9 || y > 9) {
            freeSpace = false;
        } else if (direction === 'horizontal' && x + length < 10) {
            for (let i = 0; i < length; i++) {
                let coords = getCoords(x + i, y)
                if (coords !== '') {
                    freeSpace = false;
                }
                if (freeSpace === false) return;
            }
        } else if (direction === 'vertical' && y + length < 10) {
            for (let i = 0; i < length; i++) {
                let coords = getCoords(x, y + i)
                if (coords !== '') {
                    freeSpace = false;
                }
                if (freeSpace === false) return;
            }
        }
        return freeSpace;
    }

    const placeShip = (x, y, length, direction) => {
        if (checkShipLength(x, y, length, direction)) {
            const ship = Ship(length, x, y);
            ships.push(ship);
            setCoords(x, y, ship, direction);
            return 'placed';
        }
    }

    const getCoords = (x, y) => {
        return grid[y][x];
    }

    const setCoords = (x, y, value, direction) => {
        if (direction === 'horizontal') {
            for (let i = 0; i < value.length; i++) {
                grid[y][x + i] = value;
            }
        } else if (direction === 'vertical') {
            for (let i = 0; i < value.length; i++) {
                grid[y + i][x] = value;
            }
        } else if (direction === null) {
            grid[y][x] = value;
        }
    }

    const checkForWin = () => {
        let sunkShips = [];
        ships.forEach(ship => {
            if (ship.sunkStatus() === true) sunkShips.push(ship);
        })
        if (sunkShips.length === ships.length) return true;
        return false;
    }

    const receiveAttack = (x, y) => {
        let location = getCoords(x, y);
        if (location === '') {
            setCoords(x, y, 'X', null);
            return getCoords(x, y);
        } else if (location !== '' && location !== 'X' && location !== 'XX') {
            const ship = getCoords(x, y);
            setCoords(x, y, 'XX', null);
            if (ship.takeHit() === 'sunk') {
                console.log(`ship: ${ship.getHits()}`);
                // setCoords(x, y, 'XX', null);
                if (checkForWin() === true) return 'Winner!';
                return 'sunk';
            }
            // return getCoords(x, y);
        }
    }

    return { getGrid, getCoords, placeShip, receiveAttack, getShips, checkShipLength, checkForWin }
}

export default Gameboard;
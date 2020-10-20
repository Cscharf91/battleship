import Gameboard from './Gameboard';


test('gameboard should create a 10x10 cell grid', () => {
    const gameboard = Gameboard([]);
    expect(gameboard.getGrid().length).toBe(10);
    expect(gameboard.getGrid()[0].length).toBe(10);
});

test('find x, y coordinates with getCoords', () => {
    const gameboard = Gameboard([
        [0, 0, 0, 0], 
        [0, 0, 0, 'here']
    ]);
    expect(gameboard.getCoords(3, 1)).toBe('here');
});

test('gameboard can place a ship anywhere on the grid', () => {
    const gameboard = Gameboard([]);
    gameboard.placeShip(1, 1, 2, 'horizontal');
    expect(gameboard.getCoords(1, 1)).not.toBe('');
});

test('gameboard can place a vertical ship on the grid', () => {
    const gameboard = Gameboard([]);
    gameboard.placeShip(1, 1, 2, 'vertical');
    expect(gameboard.getCoords(1, 2)).not.toBe('');
});

test('adding a ship to the gameboard adds ship to ships array', () => {
    const gameboard = Gameboard([]);
    gameboard.placeShip(1, 1, 2, 'horizontal');
    const ship = gameboard.getCoords(1, 1);
    expect(gameboard.getShips()[0]).toEqual(ship);
});

test('gameboard can attack and recognize a miss', () => {
    const gameboard = Gameboard([]);
    gameboard.receiveAttack(1, 1);
    expect(gameboard.getCoords(1, 1)).toBe('X');
});

test('gameboard can attack and recognize a hit', () => {
    const gameboard = Gameboard([]);
    gameboard.placeShip(1, 1, 2, 'horizontal');
    gameboard.receiveAttack(1, 1);
    const ship = gameboard.getCoords(2, 1);
    expect(gameboard.getCoords(1, 1)).toEqual('XX');
    expect(ship.hits).toEqual(['X']);
});

test('gameboard can attack and recognize a ship sink', () => {
    const gameboard = Gameboard([]);
    gameboard.placeShip(5, 2, 2, 'horizontal');
    gameboard.placeShip(1, 1, 2, 'vertical');
    gameboard.receiveAttack(1, 1);
    expect(gameboard.receiveAttack(1, 2)).toEqual('sunk');
});

test('gameboard can attack and recognize a game winner', () => {
    const gameboard = Gameboard([]);
    gameboard.placeShip(1, 1, 2, 'horizontal');
    gameboard.receiveAttack(1, 1);
    expect(gameboard.receiveAttack(2, 1)).toBe('Winner!');
});
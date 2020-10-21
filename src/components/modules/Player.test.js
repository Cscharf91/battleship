import Player from './Player';
import Gameboard from './Gameboard';

test('Player can be recognized as a CPU', () => {
    const p1board = Gameboard([]);
    const p2board = Gameboard([]);
    const p1 = Player('cpu', p1board, p2board);
    expect(p1.type).toBe('cpu');
})

test('CPU Player randomly places its ships', () => {
    const p1board = Gameboard([]);
    const p2board = Gameboard([]);
    const p1 = Player('cpu', p1board, p2board);
    p1.cpuPlaceShips();
    expect(p1board.getShips().length).toBe(9);
})

test('CPU Player randomly makes a legal move', () => {
    const p1board = Gameboard([]);
    const p2board = Gameboard([]);
    const p1 = Player('cpu', p1board, p2board);
    p1.makeRandomPlay();
    const [x, y] = p1.getMoves()[0];
    expect(p2board.getCoords(x, y)).toBe('X');
})
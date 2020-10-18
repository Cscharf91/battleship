import Ship from './Ship';


test('ship returns a length', () => {
    const ship = Ship(2, 2, 5);
    expect(ship.length).toBe(2);
});

test('ship.takeHit changes the proper index of the hits array', () => {
    const ship = Ship(2, 2, 5);
    ship.takeHit();
    expect(ship.hits[0]).toBe('X');
});

test('Sunk returns true if hit on every node', () => {
    const ship = Ship(2, 2, 5);
    ship.takeHit();
    ship.takeHit();
    expect(ship.sunkStatus()).toBe(true);
});

test('Records full location', () => {
    const ship = Ship(2, 2, 5, 'horizontal');
    expect(ship.getLocations()).toEqual([ [ 2, 5 ], [ 3, 5 ] ]);
});
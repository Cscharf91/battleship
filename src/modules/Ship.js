const Ship = (length, x, y, direction) => {
    let hits = [];
    let sunk = false;
    const sunkStatus = () => sunk;

    const takeHit = () => {
        hits.unshift('X');
        if (isSunk()) return 'sunk';
    };

    const getLocations = () => {
        let locations = [];
        if (direction === 'horizontal') {
            for (let i = 0; i < length; i++) {
                locations.push([x + i, y]);
            }
        }
        return locations;
    }

    const isSunk = () => {
        if (hits.length === length) {
            sunk = true;
            return true;
        }
    }

    return { length, sunkStatus, takeHit, hits, getLocations };
}

export default Ship;
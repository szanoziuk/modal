export function getUniqueId( obj = {} ) {     
    const startArr = getUniqueId.ids;
    const keys = Object.keys( obj ).length ? Object.keys( obj ) : [];
    const arr = [ ...startArr, ...keys ]; 
    const id = getRandomInt( 1, 1e100 );
    if (arr.includes(id)) {
        getUniqueId();
    } else {
        arr.push(id);
        return id;
    }
}

getUniqueId.ids = [];


function getRandomInt( min, max ) {
    return Math.floor( Math.random() * (max - min) ) + min;
}
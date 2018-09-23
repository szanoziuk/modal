export function getUniqueId( obj = {} ) {     
    const startArr = getUniqueId.ids;
    const keys = Object.keys( obj ).length ? Object.keys( obj ) : [];
    const arr = [ ...startArr, ...keys ]; 
    const id = (Math.random() * 100000000).toFixed();
    if (arr.includes(id)) {
        getUniqueId();
    } else {
        arr.push(id);
        return id;
    }
}

getUniqueId.ids = [];


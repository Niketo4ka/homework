const position = {
    lat: 45.583,
    lng: 25.765
};

const address = {
    lat: 76.234,
    lng: 55.123
};


const locLat = address.lat - position.lat;
const locLng = address.lng - position.lng;

console.log(locLat); //30.650999999999996
console.log(locLng); //29.357999999999997

//перевести данную разницу градусов в километры

const x = locLat * 111.1;
const y = locLng * 111.1;

console.log(x); //3405.3260999999993
console.log(y); //3261.6737999999996

const diagonal = Math.sqrt(x ** 2 + y ** 2);

console.log(`
    Расстояние от текущей точки до места назначения 
    ${diagonal} километров
    `);

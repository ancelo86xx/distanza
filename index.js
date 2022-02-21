const geolib = require('geolib');


let dist = geolib.getDistance(
    { latitude: 51.5103, longitude: 7.49347 },
    { latitude: 52.5103, longitude: 8.49347 }
);
console.log(dist)
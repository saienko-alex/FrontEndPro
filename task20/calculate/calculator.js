const sum = require('./sum.js');
const mult = require('./mult');
const sub = require('./sub');
const div = require('./div');


module.exports = {
    ...sub,
    ...div,
    ...sum,
    ...mult,
}




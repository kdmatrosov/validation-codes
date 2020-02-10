'use strict';
var checkSnils = require('./checkSnils');
module.exports = function (value) {
    var res = '';
    if (typeof (value) === 'number') {
        res = '' + value;
    } else if (typeof (value) === 'string') {
        res = value.replace(/\D/g, '');
    } else {
        return false;
    }
    if (res.length !== 11) {
        return false;
    }
    res = res.slice(0, 3) + '-' + res.slice(3, 6) + '-' + res.slice(6, 9) + ' ' + res.slice(-2);
    return checkSnils(res);
};
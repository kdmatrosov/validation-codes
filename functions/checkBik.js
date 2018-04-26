'use strict';
module.exports = function (value) {
    value = '' + value;
    if (!/^\d{9}$/.test(value)) {
        return false;
    }
    var thirdPart = value.slice(-3);
    if (+thirdPart === 0 || +thirdPart === 1 || +thirdPart === 2) { // спец. значения
        return true;
    }
    return +thirdPart >= 50 && +thirdPart < 1000;
};
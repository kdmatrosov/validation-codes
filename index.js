'use strict';
var checkINN = require('./functions/checkINN');
var checkSnils = require('./functions/checkSnils');
var checkOgrn = require('./functions/checkOgrn');
var checkOgrnip = require('./functions/checkOgrnip');

module.exports = {
    checkINN: checkINN, 
    checkSnils: checkSnils, 
    checkOgrn: checkOgrn,
    checkOgrnip: checkOgrnip
};
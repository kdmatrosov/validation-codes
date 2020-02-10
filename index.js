'use strict';
var checkINN = require('./functions/checkINN');
var checkSnils = require('./functions/checkSnils');
var checkOgrn = require('./functions/checkOgrn');
var checkOgrnip = require('./functions/checkOgrnip');
var checkBik = require('./functions/checkBik');
var checkSnilsOnlyChecksum = require('./functions/checkSnilsOnlyChecksum');

module.exports = {
    checkINN: checkINN, 
    checkSnils: checkSnils, 
    checkOgrn: checkOgrn,
    checkOgrnip: checkOgrnip,
    checkBik: checkBik,
    checkSnilsOnlyChecksum: checkSnilsOnlyChecksum
};
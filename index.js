'use strict';
const checkINN = require('./functions/checkINN');
const checkSnils = require('./functions/checkSnils');

module.exports = function () {
  return {checkINN, checkSnils};
};
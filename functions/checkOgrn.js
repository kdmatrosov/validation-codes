'use strict';
module.exports = function (value) {
  //преобразуем в строку
  value = '' + value;
  if (!(/^\d{13}$/.test(value))) {
    return false;
  }
  return parseInt((value.slice(0, -1) % 11).toString().slice(-1)) === +value[12];
};
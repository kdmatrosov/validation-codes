'use strict';
module.exports = function (value) {
  //преобразуем в строку
  value = '' + value;
  if (!(/^\d{15}$/.test(value))) {
    return false;
  }
  return parseInt((value.slice(0, -1) % 13).toString().slice(-1)) === +value[14];
};
'use strict';
module.exports = function (value) {
    //преобразуем в строку
    value = "" + value;
    if (!(/^\d{13}$/.test(value))) {
      return false;
    }
	return value.slice(0, -1) % 11 === +value[12];
};
'use strict';
module.exports = function (value) {
  if (!/^\d{3}-\d{3}-\d{3}\s\d{2}$/.test(value)) {
    return false;
  }
  value = value.replace(/\D/g, '');
  const checkSum = parseInt(value.slice(9), 10);
  value = value.substring(0, 9).split('');
  const sum = value.reduce((acc, next, index) => {
    return acc + next * (9 - index);
  }, 0);
  return (sum < 100 && sum === checkSum)
    || ((sum === 100 || sum === 101) && checkSum === 0)
    || (sum > 101 && (sum % 101 === checkSum || (sum % 101 === 100 && checkSum === 0)));
};
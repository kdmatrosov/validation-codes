exports.checkINN = function (value) {
  if (!(/^\d{10}$/.test(value)) && !(/^\d{12}$/.test(value))) {
    return false;
  }
  //преобразуем в строку
  value = "" + value;
  //преобразуем в массив
  value = value.split('');
  //для ИНН в 10 знаков
  if ((value.length === 10) && (value[9] === ((2 * value[0] + 4 * value[1] + 10 * value[2] + 3 * value[3] + 5 * value[4] + 9 * value[5] + 4 * value[6] + 6 * value[7] + 8 * value[8]) % 11) % 10)) {
    return true;
  }
  //для ИНН в 12 знаков
  return (value.length === 12) && ((+value[10] === ((7 * value[0] + 2 * value[1] + 4 * value[2] + 10 * value[3] + 3 * value[4] + 5 * value[5] + 9 * value[6] + 4 * value[7] + 6 * value[8] + 8 * value[9]) % 11) % 10) && (+value[11] === ((3 * value[0] + 7 * value[1] + 2 * value[2] + 4 * value[3] + 10 * value[4] + 3 * value[5] + 5 * value[6] + 9 * value[7] + 4 * value[8] + 6 * value[9] + 8 * value[10]) % 11) % 10));
};
exports.checkSnils = function (value) {
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

var checkSnils = require('../functions/checkSnilsOnlyChecksum');
var validSnils = [
  '586-595-917 80',
  '58659591780',
  '586 595 917 80',
  '134 940 005 39',
  '914-561-751 11',
  64270954807,
];

var invalidSnils = [
  '111-111-111 11',
  '611-ва-865 80',
  '151-324-910 82',
  64270904807
];


describe('Check SnilsOnlyChecksum', () => {
  validSnils.forEach(snils => {
    test(`${snils} should be correct`, () => {
      expect(checkSnils(snils)).toBe(true);
    });
  });

  invalidSnils.forEach(snils => {
    test(`${snils} should be wrong`, () => {
      expect(checkSnils(snils)).toBe(false);
    });
  });
});

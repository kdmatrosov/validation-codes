
var checkSnils = require('../functions/checkSnils');
var validSnils = [
  '586-595-917 80',
  '611-357-865 80',
  '151-981-910 82',
  '384-051-346 70',
  '358-168-076 09',
];

var invalidSnils = [
  '111-111-111 11',
  '611-ва-865 80',
  '151-324-910 82',
  '38405134670'
];


describe('Check Snils', () => {
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

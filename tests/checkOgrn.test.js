
var checkOgrn = require('../functions/checkOgrn');
var validOgrn = [
  '9106722490217',
  '5065049620796',
  '9154001968881',
  '6160394236029',
  '8083210639372',
  '7048473202122',
  '4090342707154'
];

var invalidOgrn = [
  '234432432',
  '423543534553',
  '123455342554321',
  'аыав432ыавыавы',
  '11150уц09301',
  '1110005080',
  '9100722490217',
  '5060049620796',
  '9154000968881',
  '6160094236029',
  '8083000639372',
  '7048473200122',
  '4090342700154'
];

describe('Check Ogrn', () => {
  validOgrn.forEach(Ogrn => {
    test(`${Ogrn} should be correct`, () => {
      expect(checkOgrn(Ogrn)).toBe(true);
    });
  });

  invalidOgrn.forEach(Ogrn => {
    test(`${Ogrn} should be wrong`, () => {
      expect(checkOgrn(Ogrn)).toBe(false);
    });
  });
});


var checkOgrnip = require('../functions/checkOgrnip');
var validOgrnip = [
  '304500116000157',
  '313132804400022',
  '314220119000137',
];

var invalidOgrnip = [
  '234432432',
  '423543534553',
  '304500116000154',
  'аыав432ыавыавы',
];

describe('Check Ogrnip', () => {
  validOgrnip.forEach(Ogrnip => {
    test(`${Ogrnip} should be correct`, () => {
      expect(checkOgrnip(Ogrnip)).toBe(true);
    });
  });

  invalidOgrnip.forEach(Ogrnip => {
    test(`${Ogrnip} should be wrong`, () => {
      expect(checkOgrnip(Ogrnip)).toBe(false);
    });
  });
});

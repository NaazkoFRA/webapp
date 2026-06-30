const { calcul } = require('./app');

test('calcul additionne correctement', () => {
  expect(calcul(1, 2)).toBe(3);
});

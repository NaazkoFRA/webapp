const { calcul } = require('./app');

test('calcul additionne deux positifs', () => {
  expect(calcul(1, 2)).toBe(3);
});

test('calcul avec zéro', () => {
  expect(calcul(0, 5)).toBe(5);
});

test('calcul avec négatifs', () => {
  expect(calcul(-1, -2)).toBe(-3);
});

test('calcul mixte', () => {
  expect(calcul(10, -3)).toBe(7);
});

const { calcul, app } = require('./app');
const request = require('supertest');

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

test('GET / retourne Hello DevSecOps!', async () => {
  const res = await request(app).get('/');
  expect(res.statusCode).toBe(200);
  expect(res.text).toBe('Hello DevSecOps!');
});

const { getAge } = require('./index.js');

describe('age claculator', () => {
  test('someone born in 1989 is 34 in 2023', () => {
    expect(getAge(1989, 2023)).toBe(34);
  });
});
import { evenNumbers, toDollars, divideBy, multiplyBy } from './numbers';

// evenNumbers test
describe('evenNumbers', () => {
  it('returns the even numbers', () => {
    const numbers = [1, 4, 5, 10, 0];
    const result = evenNumbers(numbers);
    expect(result).toEqual([4, 10, 0]);
  });
});

// toDollar test
describe('toDollars', () => {
  it('returns the dollar', () => {
    const dollar = 1;
    const result = toDollars(dollar);
    expect(result).toBe(`$1.00`);
  });
});

// divideBy test
describe('divideBy', () => {
  it('returns divided array', () => {
    const numbers = [10, 20, 30, 40, 50];
    const result = divideBy(numbers, 5);
    expect(result).toStrictEqual([2, 4, 6, 8, 10]);
  });
});

// multiplyBy test
describe('multiplyBy', () => {
  it('returns multiply object', () => {
    const obj = { one: 1 };
    const result = multiplyBy(obj, 2);
    expect(result).toStrictEqual({ one: 2 });
  });
});

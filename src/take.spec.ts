import { expect } from 'chai';
import 'mocha';
import './take';

describe('linq.take', () => {
  it('should take specified amount', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const result = arr.take(5);
    expect(result.length).to.eq(5);
    expect(result[0]).to.eq(1);
    expect(result[1]).to.eq(2);
    expect(result[2]).to.eq(3);
    expect(result[3]).to.eq(4);
    expect(result[4]).to.eq(5);
  });
  it('should not mutate original array', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    arr.take(5);
    expect(arr.length).to.eq(10);
  });
});

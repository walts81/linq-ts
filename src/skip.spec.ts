import { expect } from 'chai';
import 'mocha';
import './skip';

describe('linq.skip', () => {
  it('should skip specified amount', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const result = arr.skip(5);
    expect(result.length).to.eq(5);
    expect(result[0]).to.eq(6);
    expect(result[1]).to.eq(7);
    expect(result[2]).to.eq(8);
    expect(result[3]).to.eq(9);
    expect(result[4]).to.eq(10);
  });
  it('should not mutate original array', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    arr.skip(5);
    expect(arr.length).to.eq(10);
  });
});

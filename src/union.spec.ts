import { expect } from 'chai';
import 'mocha';
import './union';

describe('linq.union', () => {
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  it('should combine arrays', () => {
    const result = arr1.union(arr2);
    expect(result).to.eql([1, 2, 3, 4, 5, 6]);
  });
  it('should not mutate original array', () => {
    const result = arr1.union(arr2);
    expect(arr1).to.eql([1, 2, 3]);
    expect(arr2).to.eql([4, 5, 6]);
    expect(result).to.eql([1, 2, 3, 4, 5, 6]);
  });
  it('should add item to array without mutating', () => {
    const result = arr1.union(4);
    expect(arr1).to.eql([1, 2, 3]);
    expect(result).to.eql([1, 2, 3, 4]);
  });
});

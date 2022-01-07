import { expect } from 'chai';
import 'mocha';
import './except';

describe('linq.except', () => {
  it(`should return items that don't intersect provided array (primitive)`, () => {
    const arr1 = [1, 2, 3, 4, 5, 6];
    const arr2 = [4, 5, 6, 7, 8, 9];
    const result = arr1.except(arr2);
    expect(result).to.eql([1, 2, 3]);
  });
  it(`should return items that don't intersect provided array (complex)`, () => {
    const arr1 = [
      { id: 1, val: '1' },
      { id: 2, val: '2' },
      { id: 3, val: '3' },
      { id: 4, val: '4' },
      { id: 5, val: '5' },
      { id: 6, val: '6' },
    ];
    const arr2 = [
      { id: 4, val: '4' },
      { id: 5, val: '5' },
      { id: 6, val: '6' },
      { id: 7, val: '7' },
      { id: 8, val: '8' },
      { id: 9, val: '9' },
    ];
    const result = arr1.except(arr2, (a, b) => a.id === b.id);
    expect(result).to.eql([
      { id: 1, val: '1' },
      { id: 2, val: '2' },
      { id: 3, val: '3' },
    ]);
  });
});

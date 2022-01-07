import { expect } from 'chai';
import 'mocha';
import './order-by-desc';

describe('linq.orderByDescending', () => {
  const primitiveArr = [5, 2, 10, 3, 9, 1, 7, 4, 8, 6];
  const complexArr = primitiveArr.map(x => ({ id: x, val: x.toString() }));

  it('should sort primitive data types', () => {
    const arr = primitiveArr;
    const result = arr.orderByDescending();
    expect(result).to.eql([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
  });
  it('should not mutate original array', () => {
    const arr = primitiveArr;
    const origLength = arr.length;
    const origData = [...arr];
    const result = arr.orderByDescending();
    expect(arr).not.to.eq(result);
    expect(arr).to.eq(primitiveArr);
    expect(arr.length).to.eq(origLength);
    expect(arr).to.eql(origData);
    expect(result).not.to.eql(origData);
  });
  it('should sort complex data types', () => {
    const arr = complexArr;
    const result = arr.orderByDescending(x => x.id);
    const orderedNums = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    const ordered = orderedNums.map(x => ({ id: x, val: x.toString() }));
    expect(result).to.eql(ordered);
  });
});

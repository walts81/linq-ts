import { expect } from 'chai';
import 'mocha';
import './order-by';

describe('linq.orderBy', () => {
  const primitiveArr = [5, 2, 10, 3, 9, 1, 7, 4, 8, 6];
  const complexArr = primitiveArr.map(x => ({ id: x, val: x.toString() }));

  it('should sort primitive data types', () => {
    const arr = primitiveArr;
    const result = arr.orderBy();
    expect(result).to.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
  it('should not mutate original array', () => {
    const arr = primitiveArr;
    const origLength = arr.length;
    const origData = [...arr];
    const result = arr.orderBy();
    expect(arr).not.to.eq(result);
    expect(arr).to.eq(primitiveArr);
    expect(arr.length).to.eq(origLength);
    expect(arr).to.eql(origData);
    expect(result).not.to.eql(origData);
  });
  it('should sort complex data types', () => {
    const arr = complexArr;
    const result = arr.orderBy(x => x.id);
    const orderedNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const ordered = orderedNums.map(x => ({ id: x, val: x.toString() }));
    expect(result).to.eql(ordered);
  });
});

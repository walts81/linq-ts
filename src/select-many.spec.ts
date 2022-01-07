import { expect } from 'chai';
import 'mocha';
import './select-many';

describe('linq.selectMany', () => {
  const empty: Array<{ id: number[] }> = [];
  const collection = [{ id: [1] }, { id: [2] }, { id: [3] }, { id: [4] }, { id: [5] }];

  it('should return empty array when array is empty', () => {
    const result = empty.selectMany(x => x.id);
    expect(result.length).to.eq(0);
  });

  it('should return flattened array', () => {
    const result = collection.selectMany(x => x.id);
    expect(result.length).to.eq(5);
    expect(result[0]).to.eq(1);
    expect(result[1]).to.eq(2);
    expect(result[2]).to.eq(3);
    expect(result[3]).to.eq(4);
    expect(result[4]).to.eq(5);
  });
});

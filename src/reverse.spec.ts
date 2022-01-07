import { expect } from 'chai';
import 'mocha';
import './reverse';

describe('linq.reverse', () => {
  const empty: any[] = [];
  const collection = [1, 2, 3, 4, 5];

  it('should return items in reverse order', () => {
    const result = collection.reverse();
    expect(result[0]).to.eq(5);
    expect(result[1]).to.eq(4);
    expect(result[2]).to.eq(3);
    expect(result[3]).to.eq(2);
    expect(result[4]).to.eq(1);
  });

  it('should return empty array when array is empty', () => {
    const result = empty.reverse();
    expect(result.length).to.eq(0);
  });
});

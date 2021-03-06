import { expect } from 'chai';
import 'mocha';
import './sum';

describe('linq.sum', () => {
  const empty: any[] = [];
  const collection = [1, 2, 3, 4, 5];
  const collection2 = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
  const nullCollection = [...collection, null];
  const undefinedCollection = [...collection, undefined];
  const blankCollection = [...collection, ''];
  const alphaCollection = [...collection, 'abc'];

  it('should return zero when array is empty', () => {
    const result = empty.sum();
    expect(result).to.eq(0);
  });

  it('should return sum when no selector provided', () => {
    const result = collection.sum();
    expect(result).to.eq(15);
  });

  it('should return sum when selector is provided', () => {
    const result = collection2.sum(x => x.id);
    expect(result).to.eq(15);
  });

  it('should exclude null', () => {
    const result = nullCollection.sum();
    expect(result).to.eq(15);
  });

  it('should exclude undefined', () => {
    const result = undefinedCollection.sum();
    expect(result).to.eq(15);
  });

  it('should exclude blank', () => {
    const result = blankCollection.sum();
    expect(result).to.eq(15);
  });

  it('should exclude alpha', () => {
    const result = alphaCollection.sum();
    expect(result).to.eq(15);
  });
});

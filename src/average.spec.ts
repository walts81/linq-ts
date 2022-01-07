import { expect } from 'chai';
import 'mocha';
import './average';

describe('linq.average', () => {
  const empty: any[] = [];
  const collection = [1, 2, 3, 4, 5];
  const collection2 = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
  const nullCollection = [...collection, null];
  const undefinedCollection = [...collection, undefined];
  const blankCollection = [...collection, ''];
  const alphaCollection = [...collection, 'abc'];

  it('should return zero when array is empty', () => {
    const result = empty.average();
    expect(result).to.eq(0);
  });

  it('should return average when no selector provided', () => {
    const result = collection.average();
    expect(result).to.eq(3);
  });

  it('should return average when selector is provided', () => {
    const result = collection2.average(x => x.id);
    expect(result).to.eq(3);
  });

  it('should count null as zero', () => {
    const result = nullCollection.average();
    expect(result).to.eq(15 / 6);
  });

  it('should count undefined as zero', () => {
    const result = undefinedCollection.average();
    expect(result).to.eq(15 / 6);
  });

  it('should count blank as zero', () => {
    const result = blankCollection.average();
    expect(result).to.eq(15 / 6);
  });

  it('should count alpha as zero', () => {
    const result = alphaCollection.average();
    expect(result).to.eq(15 / 6);
  });
});

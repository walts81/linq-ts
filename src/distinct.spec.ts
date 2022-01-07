import { expect } from 'chai';
import 'mocha';
import './distinct';

const empty: any[] = [];
const simpleCollection = [1, 2, 3, 4, 5, 5, 5, 5, 5, 4, 4, 4, 3, 3, 2];
const val1 = { id: 1, val: '1' };
const val2 = { id: 2, val: '2' };
const val3 = { id: 3, val: '3' };
const val4 = { id: 4, val: '4' };
const val5 = { id: 5, val: '5' };
const complexWithMultipleRef = [
  val1,
  val2,
  val3,
  val4,
  val5,
  val5,
  val5,
  val5,
  val5,
  val4,
  val4,
  val4,
  val3,
  val3,
  val2,
];
const complexCollection = complexWithMultipleRef.map(x => ({ ...x }));

describe('linq.distinctByKey', () => {
  it('should return distinct array when not specifying a property (primitive)', () => {
    const result = simpleCollection.distinctByKey();
    expect(result.length).to.eq(5);
  });

  it('should return distinct array when not specifying a property (object)', () => {
    const result = complexWithMultipleRef.distinctByKey();
    expect(result.length).to.eq(5);
  });

  it('should return distinct array when specifying a property', () => {
    const result1 = complexCollection.distinctByKey(x => x.id);
    const result2 = complexCollection.distinctByKey(x => x.val);
    expect(result1.length).to.eq(5);
    expect(result2.length).to.eq(5);
  });

  it('should return empty array when provided array is empty', () => {
    const result = empty.distinctByKey();
    expect(result.length).to.eq(0);
  });
});

describe('linq.disinct', () => {
  it('should return distinct array when not specifying a property (primitive)', () => {
    const result = simpleCollection.distinct();
    expect(result.length).to.eq(5);
  });

  it('should return distinct array when not specifying a property (object)', () => {
    const result = complexWithMultipleRef.distinct();
    expect(result.length).to.eq(5);
  });

  it('should return distinct array when specifying a property', () => {
    const result1 = complexCollection.distinct((a, b) => a.id === b.id);
    const result2 = complexCollection.distinct((a, b) => a.val === b.val);
    expect(result1.length).to.eq(5);
    expect(result2.length).to.eq(5);
  });

  it('should return empty array when provided array is empty', () => {
    const result = empty.distinct();
    expect(result.length).to.eq(0);
  });
});

import { expect } from 'chai';
import 'mocha';
import './remove-all';

describe('linq.removeAll', () => {
  it('should remove all items when no expression specified', () => {
    const arr = [1, 2, 3];
    const result = arr.removeAll();
    expect(result.length).to.eq(0);
  });
  it('should remove items that match expression (no mutate)', () => {
    const arr = [1, 2, 2, 2, 3];
    const result = arr.removeAll(x => x === 2);
    expect(result.length).to.eq(2);
    expect(result[0]).to.eq(1);
    expect(result[1]).to.eq(3);
  });
  it('should remove items that match expression (mutate)', () => {
    const arr = [1, 2, 2, 2, 3];
    arr.removeAll(x => x === 2, true);
    expect(arr.length).to.eq(2);
    expect(arr[0]).to.eq(1);
    expect(arr[1]).to.eq(3);
  });
  it('should not mutate original array by default', () => {
    const arr = [1, 2, 3];
    arr.removeAll();
    expect(arr.length).to.eq(3);
    expect(arr[0]).to.eq(1);
    expect(arr[1]).to.eq(2);
    expect(arr[2]).to.eq(3);
  });
  it('should mutate original array when specified', () => {
    const arr = [1, 2, 3];
    arr.removeAll(undefined, true);
    expect(arr.length).to.eq(0);
  });
  it('should return reference to original array when mutating', () => {
    const arr = [1, 2, 3];
    const result = arr.removeAll(undefined, true);
    expect(result).to.eq(arr);
  });
});

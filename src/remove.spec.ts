import { expect } from 'chai';
import 'mocha';
import './remove';

describe('linq.remove', () => {
  it('should remove item', () => {
    const arr = [1, 2, 3];
    const result = arr.remove(2);
    expect(result.length).to.eq(2);
    expect(result[0]).to.eq(1);
    expect(result[1]).to.eq(3);
  });
  it('should not mutate original array by default', () => {
    const arr = [1, 2, 3];
    arr.remove(2);
    expect(arr.length).to.eq(3);
    expect(arr[0]).to.eq(1);
    expect(arr[1]).to.eq(2);
    expect(arr[2]).to.eq(3);
  });
  it('should mutate original array when specified', () => {
    const arr = [1, 2, 3];
    arr.remove(2, true);
    expect(arr.length).to.eq(2);
    expect(arr[0]).to.eq(1);
    expect(arr[1]).to.eq(3);
  });
  it('should return reference to original array when mutating', () => {
    const arr = [1, 2, 3];
    const result = arr.remove(2, true);
    expect(result).to.eq(arr);
  });
  it('should return copy of original array when item not found by default', () => {
    const arr = [1, 2, 3];
    const result = arr.remove(4);
    expect(result.length).to.eq(3);
    expect(arr.length).to.eq(3);
    expect(result).to.not.eq(arr);
    expect(result).to.eql(arr);
  });
  it('should return reference to original array when item not found and mutate specified', () => {
    const arr = [1, 2, 3];
    const result = arr.remove(4, true);
    expect(result).to.eq(arr);
  });
});

import { expect } from 'chai';
import 'mocha';
import './remove-at';

describe('linq.removeAt', () => {
  it('should remove at specified index', () => {
    const arr = [1, 2, 3];
    const result = arr.removeAt(1);
    expect(result.length).to.eq(2);
    expect(result[0]).to.eq(1);
    expect(result[1]).to.eq(3);
  });
  it('should not mutate original array by default', () => {
    const arr = [1, 2, 3];
    arr.removeAt(1);
    expect(arr.length).to.eq(3);
    expect(arr[0]).to.eq(1);
    expect(arr[1]).to.eq(2);
    expect(arr[2]).to.eq(3);
  });
  it('should mutate original array when specified', () => {
    const arr = [1, 2, 3];
    arr.removeAt(1, true);
    expect(arr.length).to.eq(2);
    expect(arr[0]).to.eq(1);
    expect(arr[1]).to.eq(3);
  });
  it('should return reference to original array when mutating', () => {
    const arr = [1, 2, 3];
    const result = arr.removeAt(1, true);
    expect(result).to.eq(arr);
  });
});

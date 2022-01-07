import { expect } from 'chai';
import 'mocha';
import './to-map';
import { DuplicateKeyException } from './_common';

describe('linq.toMap', () => {
  it('should throw exception when duplicate keys exist by default', () => {
    const arr = [
      { id: 1, val: '1' },
      { id: 1, val: '2' },
    ];

    expect(() => {
      arr.toMap(
        x => x.id,
        x => x.val
      );
    }).to.throw(DuplicateKeyException);
  });
  it('should not throw exception when duplicate keys exist and throwOnDuplicateKey is specified as false', () => {
    const arr = [
      { id: 1, val: '1' },
      { id: 1, val: '2' },
    ];

    expect(() => {
      arr.toMap(
        x => x.id,
        x => x.val,
        false
      );
    }).to.not.throw(DuplicateKeyException);
  });
  it('should treat different primitive types as different keys', () => {
    const arr = [
      { id: 1, val: '1' },
      { id: '1', val: '2' },
    ];

    expect(() => {
      arr.toMap(
        x => x.id,
        x => x.val
      );
    }).to.not.throw(DuplicateKeyException);
  });
  it('should create dictionary from primitive keys', () => {
    const arr = [
      { id: '1', val: '1' },
      { id: 2, val: '2' },
    ];
    const map = arr.toMap(
      x => x.id,
      x => x.val
    );
    expect(map.size).to.eq(2);
    expect(map.get('1')).to.eq('1');
    expect(map.get(2)).to.eq('2');
  });
  it('should create dictionary from complex keys', () => {
    const arr = [
      { id: { data: 'test' }, val: '1' },
      { id: { data: 'test-2' }, val: '2' },
    ];
    const map = arr.toMap(
      x => x.id,
      x => x.val
    );
    expect(map.size).to.eq(2);
    expect(map.get(arr[0].id)).to.eq('1');
    expect(map.get(arr[1].id)).to.eq('2');
  });
  it('should create dictionary with primitive values', () => {
    const arr = [
      { id: '1', val: '1' },
      { id: 2, val: '2' },
    ];
    const map = arr.toMap(
      x => x.id,
      x => x.val
    );
    expect(map.size).to.eq(2);
    expect(map.get('1')).to.eq('1');
    expect(map.get(2)).to.eq('2');
  });
  it('should create dictionary with complex values', () => {
    const arr = [
      { id: '1', val: { data: '1' } },
      { id: 2, val: { data: '2' } },
    ];
    const map = arr.toMap(
      x => x.id,
      x => x.val
    );
    expect(map.size).to.eq(2);
    expect(map.get('1')).to.eql({ data: '1' });
    expect(map.get(2)).to.eql({ data: '2' });
  });
});

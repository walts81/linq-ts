import { expect } from 'chai';
import 'mocha';
import './to-dictionary';
import { DuplicateKeyException } from './_common';

describe('linq.toDictionary', () => {
  it('should throw exception when duplicate keys exist by default', () => {
    const arr = [
      { id: 1, val: '1' },
      { id: 1, val: '2' },
    ];

    expect(() => {
      arr.toDictionary(
        x => x.id,
        x => x.val
      );
    }).to.throw(DuplicateKeyException);
  });
  it('should not throw exception when dulicate keys exist and throwOnDulicateKey is specifed as false', () => {
    const arr = [
      { id: 1, val: '1' },
      { id: 1, val: '2' },
    ];

    expect(() => {
      arr.toDictionary(
        x => x.id,
        x => x.val,
        false
      );
    }).to.not.throw(DuplicateKeyException);
  });
  it('should treat different primitive types as same keys', () => {
    const arr = [
      { id: 1, val: '1' },
      { id: '1', val: '2' },
    ];

    expect(() => {
      arr.toDictionary(
        x => x.id,
        x => x.val
      );
    }).to.throw(DuplicateKeyException);
  });
  it('should create dictionary from primitive keys', () => {
    const arr = [
      { id: '1', val: '1' },
      { id: 2, val: '2' },
    ];
    const dict = arr.toDictionary(
      x => x.id,
      x => x.val
    );
    expect(Object.keys(dict).length).to.eq(2);
    expect(dict['1']).to.eq('1');
    expect(dict['2']).to.eq('2');
  });
  it('should create dictionary from complex keys', () => {
    const arr = [
      { id: { data: 'test' }, val: '1' },
      { id: { data: 'test-2' }, val: '2' },
    ];
    const dict = arr.toDictionary(
      x => x.id,
      x => x.val
    );
    expect(Object.keys(dict).length).to.eq(2);
    expect(dict[JSON.stringify({ data: 'test' })]).to.eq('1');
    expect(dict[JSON.stringify({ data: 'test-2' })]).to.eq('2');
  });
  it('should create dictionary with primitive values', () => {
    const arr = [
      { id: '1', val: '1' },
      { id: 2, val: '2' },
    ];
    const dict = arr.toDictionary(
      x => x.id,
      x => x.val
    );
    expect(Object.keys(dict).length).to.eq(2);
    expect(dict['1']).to.eq('1');
    expect(dict['2']).to.eq('2');
  });
  it('should create dictionary with complex values', () => {
    const arr = [
      { id: '1', val: { data: '1' } },
      { id: 2, val: { data: '2' } },
    ];
    const dict = arr.toDictionary(
      x => x.id,
      x => x.val
    );
    expect(Object.keys(dict).length).to.eq(2);
    expect(dict['1']).to.eql({ data: '1' });
    expect(dict['2']).to.eql({ data: '2' });
  });
});

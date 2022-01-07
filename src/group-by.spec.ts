import { expect } from 'chai';
import 'mocha';
import './group-by';

describe('linq.groupBy', () => {
  const empty: any[] = [];
  const collection = [
    { id: 0, val: '0' },
    { id: 1, val: '1' },
    { id: 2, val: '2' },
    { id: 3, val: '3' },
    { id: 4, val: '4' },
    { id: 5, val: '5' },
    { id: 5, val: '5' },
    { id: 5, val: '5' },
    { id: 5, val: '5' },
    { id: 5, val: '5' },
    { id: 5, val: '5' },
    { id: 4, val: '4' },
    { id: 4, val: '4' },
    { id: 4, val: '4' },
    { id: 4, val: '4' },
    { id: 3, val: '3' },
    { id: 3, val: '3' },
    { id: 3, val: '3' },
    { id: 2, val: '2' },
    { id: 2, val: '2' },
    { id: 1, val: '1' },
  ];

  it('should group based on provided property', () => {
    const groups = collection.groupBy(x => x.id);
    expect(groups.length).to.eq(6);
    for (let i = 0; i < groups.length; i++) {
      expect(groups[i].items.length).to.eq(i + 1);
    }
  });

  it('should return empty array when provided array is empty', () => {
    const groups = empty.groupBy(x => x);
    expect(groups.length).to.eq(0);
  });

  it('should group by null, undefined, blank keys', () => {
    const arr = [...collection, { id: null, val: '6' }, { id: undefined, val: '7' }, { id: '', val: '8' }];
    const groups = arr.groupBy(x => x.id);
    expect(groups.length).to.eq(7);
    expect(groups[groups.length - 1].items.length).to.eq(3);
  });

  it('should stringify when object used as key', () => {
    const arr = [...collection, { id: { data: 'test' }, val: '6' }, { id: { data: 'test' }, val: '7' }];
    const groups = arr.groupBy(x => x.id);
    expect(groups.length).to.eq(7);
    expect(groups[groups.length - 1].items.length).to.eq(2);
    expect(groups[groups.length - 1].key).to.eql({ data: 'test' });
  });
});

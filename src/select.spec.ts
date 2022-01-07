import { expect } from 'chai';
import 'mocha';
import './select';

describe('linq.select', () => {
  const collection = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

  it('should return array of prop values based on expression', () => {
    const result = collection.select(x => x.id);
    expect(result.length).to.eq(5);
    expect(result[0]).to.eq(1);
    expect(result[1]).to.eq(2);
    expect(result[2]).to.eq(3);
    expect(result[3]).to.eq(4);
    expect(result[4]).to.eq(5);
  });
});

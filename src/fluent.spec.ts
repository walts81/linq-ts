import { expect } from 'chai';
import 'mocha';
import './any';
import './count';
import './distinct';
import './max';
import './min';
import './order-by';
import './order-by-desc';
import './remove-all';
import './select';
import './select-many';
import './skip';
import './take';
import './where';

describe('linq fluent', () => {
  const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const numArr2 = [11, 12, 13, 14, 15];
  const numArr3 = [16, 17, 18, 19, 20];
  const arr = numArr.map((x, i) => ({
    id: x,
    items: (i < 5 ? numArr2 : numArr3).map(x => ({ numericVal: x, stringVal: x.toString() })),
  }));
  describe('should chain linq methods in a fluent manner with', () => {
    it('selectMany, where, any, and count', () => {
      const count = arr
        .where(x => x.items.any(i => i.numericVal > 15))
        .selectMany(x => x.items)
        .count(x => x.numericVal > 18);
      expect(count).to.eq(10);
    });
    it('selectMany, where, orderBy, skip/take, select, and distinct', () => {
      const resultArr = arr
        .selectMany(x => x.items)
        .where(x => x.numericVal > 15)
        .orderBy(x => x.numericVal)
        .skip(5)
        .take(5)
        .select(x => x.stringVal);

      expect(resultArr.length).to.eq(5);
      const distinct = resultArr.distinct();
      expect(distinct).to.eql(['17']);
    });
    it('selectMany, where, and min', () => {
      const min = arr
        .selectMany(x => x.items)
        .where(x => x.numericVal > 15)
        .min(x => x.numericVal);
      expect(min).to.eql({ numericVal: 16, stringVal: '16' });
    });
    it('selectMany, where, and max', () => {
      const max = arr
        .selectMany(x => x.items)
        .where(x => x.numericVal > 15)
        .max(x => x.numericVal);
      expect(max?.numericVal).to.eq(20);
    });
    it('selectMany, where, orderBy, skip/take, select, removeAll, and distinct', () => {
      const removedArrResult1 = arr
        .selectMany(x => x.items)
        .where(x => x.numericVal > 15)
        .orderBy(x => x.numericVal)
        .skip(5)
        .take(20)
        .select(x => x.numericVal)
        .removeAll(x => x > 18)
        .distinct();
      expect(removedArrResult1).to.eql([17, 18]);
    });
    it('selectMany, where, orderByDescending, skip/take, select, removeAll, distinct', () => {
      const removedArrResult2 = arr
        .selectMany(x => x.items)
        .where(x => x.numericVal > 15)
        .orderByDescending(x => x.numericVal)
        .skip(5)
        .take(20)
        .select(x => x.numericVal)
        .removeAll(x => x > 18)
        .distinct();
      expect(removedArrResult2).to.eql([18, 17, 16]);
    });
  });
});

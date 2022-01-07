import { DefaultComparer } from './_common';

declare global {
  interface Array<T> {
    orderBy<TValue>(
      this: Array<T>,
      selector?: (item: T) => TValue,
      compare?: (a: TValue, b: TValue) => number
    ): Array<T>;
  }
}

Array.prototype.orderBy = orderBy;

export function orderBy<T, TValue>(this: T[], selector: (item: T) => TValue | T = x => x, compare = DefaultComparer) {
  const arr = ([] as T[]).concat(this);
  arr.sort((a, b) => compare(selector(a), selector(b)));
  return arr;
}

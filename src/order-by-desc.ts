import { DefaultComparer } from './_common';

declare global {
  interface Array<T> {
    orderByDescending<TValue>(
      this: Array<T>,
      selector?: (item: T) => TValue,
      compare?: (a: TValue, b: TValue) => number
    ): Array<T>;
  }
}

Array.prototype.orderByDescending = orderByDescending;

export function orderByDescending<T, TValue>(
  this: T[],
  selector: (item: T) => TValue | T = x => x,
  compare = DefaultComparer
) {
  const arr = this.orderBy(selector, compare);
  return arr.reverse();
}

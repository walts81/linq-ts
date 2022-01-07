import { minOrMax } from './min-or-max';
import { DefaultComparer } from './_common';

declare global {
  interface Array<T> {
    min<TProp>(
      this: Array<T>,
      selector?: (item: T, index?: number) => TProp,
      comparer?: (a: TProp, b: TProp) => number
    ): T | null;
  }
}

Array.prototype.min = min;

export function min<T, TProp>(
  this: T[],
  selector: (item: T, index?: number) => TProp | T = x => x,
  comparer: (a: TProp | T, b: TProp | T) => number = DefaultComparer
): T | null {
  return minOrMax(this, selector, comparer, 'min');
}

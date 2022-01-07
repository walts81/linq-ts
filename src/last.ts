import { EmptyArrayException, NoMatchException } from './_common';

declare global {
  interface Array<T> {
    last(this: Array<T>, expression?: (item: T, index?: number) => boolean): T;
  }
}

Array.prototype.last = last;

export function last<T>(this: T[], expression?: (item: T, index?: number) => boolean): T {
  if (this.length === 0) throw new EmptyArrayException();

  if (!expression) return this[this.length - 1];

  for (let i = this.length - 1; i >= 0; i--) {
    const item = this[i];
    if (expression(item, i)) {
      return item;
    }
  }

  throw new NoMatchException();
}

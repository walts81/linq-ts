import { EmptyArrayException, NoMatchException } from './_common';

declare global {
  interface Array<T> {
    first(this: Array<T>, expression?: (item: T, index?: number) => boolean): T;
  }
}

Array.prototype.first = first;

export function first<T>(this: T[], expression?: (item: T, index?: number) => boolean): T {
  const length = this.length;
  if (length === 0) throw new EmptyArrayException();

  if (!expression) return this[0];

  for (let i = 0; i < length; i++) {
    const item = this[i];
    if (expression(item, i)) {
      return item;
    }
  }

  throw new NoMatchException();
}

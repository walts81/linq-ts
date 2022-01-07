import { MultipleMatchException } from './_common';

declare global {
  interface Array<T> {
    singleOrDefault(this: Array<T>, expression?: (item: T, index?: number) => boolean, defaultValue?: T): T | null;
  }
}

Array.prototype.singleOrDefault = singleOrDefault;

export function singleOrDefault<T>(
  this: T[],
  expression?: (item: T, index?: number) => boolean,
  defaultValue: T = null as any
): T | null {
  const length = this.length;
  if (length === 0) return defaultValue;

  if (!expression)
    if (length > 1) throw new MultipleMatchException();
    else return this[0];

  let result: T = undefined as any;
  for (let i = 0; i < length; i++) {
    const item = this[i];
    if (expression(item, i)) {
      if (result === undefined) result = item;
      else throw new MultipleMatchException();
    }
  }

  return result || defaultValue;
}

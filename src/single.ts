import { EmptyArrayException, MultipleMatchException, NoMatchException } from './_common';

declare global {
  interface Array<T> {
    single(this: Array<T>, expression?: (item: T, index?: number) => boolean): T;
  }
}

Array.prototype.single = single;

export function single<T>(this: T[], expression?: (item: T, index?: number) => boolean): T {
  const length = this.length;
  if (length === 0) throw new EmptyArrayException();

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

  if (result === undefined) throw new NoMatchException();

  return result;
}

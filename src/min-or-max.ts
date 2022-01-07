import { EmptyArrayException } from './_common';

export function minOrMax<T, TProp>(
  collection: T[],
  selector: (item: T, index?: number) => TProp | T,
  comparer: (a: TProp | T, b: TProp | T) => number,
  type: 'min' | 'max'
): T | null {
  if (collection.length === 0) throw new EmptyArrayException();

  let result: T = undefined as any;
  let resultIndex = 0;
  for (let i = 0; i < collection.length; i++) {
    const item = collection[i];
    if (
      result === undefined ||
      (type === 'max'
        ? comparer(selector(item, i), selector(result, resultIndex)) > 0
        : comparer(selector(item, i), selector(result, resultIndex)) < 0)
    ) {
      result = item;
      resultIndex = i;
    }
  }

  return result;
}

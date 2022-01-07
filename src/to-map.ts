import { DuplicateKeyException } from './_common';

declare global {
  interface Array<T> {
    toMap<TKey, TValue>(
      this: Array<T>,
      getKey: (item: T, index?: number) => TKey,
      getValue: (item: T, index?: number) => TValue,
      throwOnDuplicateKey?: boolean
    ): Map<TKey, TValue>;
  }
}

Array.prototype.toMap = toMap;

export function toMap<T, TKey, TValue>(
  this: T[],
  getKey: (item: T, index?: number) => TKey,
  getValue: (item: T, index?: number) => TValue,
  throwOnDuplicateKey = true
) {
  return this.reduce((prev, current, i) => {
    const key = getKey(current, i);
    if (prev.has(key) && throwOnDuplicateKey) throw new DuplicateKeyException();
    prev.set(key, getValue(current, i));
    return prev;
  }, new Map<TKey, TValue>());
}

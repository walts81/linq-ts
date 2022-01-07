import { DuplicateKeyException } from './_common';
import { getValueAsString } from './get-value-as-string';

declare global {
  interface Array<T> {
    toDictionary<TKey, TValue>(
      this: Array<T>,
      getKey: (item: T, index?: number) => TKey,
      getValue: (item: T, index?: number) => TValue,
      throwOnDuplicateKey?: boolean
    ): { [key: string]: TValue };
  }
}

Array.prototype.toDictionary = toDictionary;

export function toDictionary<T, TKey, TValue>(
  this: T[],
  getKey: (item: T, index?: number) => TKey,
  getValue: (item: T, index?: number) => TValue,
  throwOnDuplicateKey = true
) {
  return this.reduce((prev, current, i) => {
    const key = getValueAsString(getKey(current, i));
    if (Object.keys(prev).indexOf(key) > -1 && throwOnDuplicateKey) throw new DuplicateKeyException(key);
    prev[key] = getValue(current, i);
    return prev;
  }, {} as { [key: string]: TValue });
}

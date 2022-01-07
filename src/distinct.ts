declare global {
  interface Array<T> {
    distinctByKey<TKey = T>(this: Array<T>, expression?: (item: T, index?: number) => TKey | T): T[];
    distinct<T>(this: Array<T>, compare?: (a: T, b: T) => boolean): T[];
  }
}

Array.prototype.distinctByKey = distinctByKey;
Array.prototype.distinct = distinct;

export function distinctByKey<T, TKey = T>(this: T[], expression: (item: T, index?: number) => TKey | T = x => x): T[] {
  const keys: Array<TKey | T> = [];
  return this.filter((x, i) => {
    const key = expression(x, i);
    const notExists = keys.indexOf(key) < 0;
    if (notExists) keys.push(key);
    return notExists;
  });
}

export function distinct<T>(this: T[], compare?: (a: T, b: T) => boolean) {
  const useCompare = !!compare;
  return this.filter((a, i, arr) => arr.indexOf(arr.first(b => (useCompare ? compare(a, b) : a === b))) === i);
}

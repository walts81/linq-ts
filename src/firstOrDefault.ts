declare global {
  interface Array<T> {
    firstOrDefault(this: Array<T>, expression?: (item: T, index?: number) => boolean, defaultValue?: T): T;
  }
}

Array.prototype.firstOrDefault = firstOrDefault;

export function firstOrDefault<T>(
  this: T[],
  expression?: (item: T, index?: number) => boolean,
  defaultValue: T = null as any
): T | null {
  const length = this.length;
  if (!expression) return length > 0 ? this[0] : defaultValue;

  for (let i = 0; i < length; i++) {
    const item = this[i];
    if (expression(item, i)) {
      return item;
    }
  }

  return defaultValue;
}

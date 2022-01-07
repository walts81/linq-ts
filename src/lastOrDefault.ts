declare global {
  interface Array<T> {
    lastOrDefault(this: Array<T>, expression?: (item: T, index?: number) => boolean, defaultValue?: T): T | null;
  }
}

Array.prototype.lastOrDefault = lastOrDefault;

export function lastOrDefault<T>(
  this: T[],
  expression?: (item: T, index?: number) => boolean,
  defaultValue: T = null as any
): T | null {
  const length = this.length;
  if (!expression) return length > 0 ? this[length - 1] : defaultValue;

  for (let i = length - 1; i >= 0; i--) {
    const item = this[i];
    if (expression(item, i)) return item;
  }
  return defaultValue;
}

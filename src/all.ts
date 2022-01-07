declare global {
  interface Array<T> {
    all(this: Array<T>, expression?: (item: T, index?: number) => boolean): boolean;
  }
}

Array.prototype.all = all;

export function all<T>(this: T[], expression?: (item: T, index?: number) => boolean) {
  if (!expression) return true;
  return this.every((x, i) => expression(x, i));
}

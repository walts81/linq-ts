declare global {
  interface Array<T> {
    count(this: Array<T>, expression?: (item: T, index?: number) => boolean): number;
  }
}

Array.prototype.count = count;

export function count<T>(this: T[], expression?: (item: T, index?: number) => boolean): number {
  if (!expression) return this.length;
  return this.filter((x, i) => expression(x, i)).length;
}

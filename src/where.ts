declare global {
  interface Array<T> {
    where(this: Array<T>, expression: (item: T, index?: number) => boolean): T[];
  }
}

Array.prototype.where = where;

export function where<T>(this: T[], expression: (item: T, index?: number) => boolean): T[] {
  return this.filter((x, i) => expression(x, i));
}

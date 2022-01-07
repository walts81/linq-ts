declare global {
  interface Array<T> {
    average(this: Array<T>, expression?: (item: T, index?: number) => number): number;
  }
}

Array.prototype.average = average;

export function average<T>(this: T[], expression?: (item: T, index?: number) => number) {
  const length = this.length;
  if (length === 0) return 0;
  return this.sum(expression) / length;
}

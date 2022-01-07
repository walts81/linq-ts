declare global {
  interface Array<T> {
    intersect(this: Array<T>, arr: Array<T>, compare?: (a: T, b: T) => boolean): T[];
  }
}

Array.prototype.intersect = intersect;

export function intersect<T>(this: T[], arr: T[], compare?: (a: T, b: T) => boolean) {
  const useCompare = !!compare;
  return this.filter(a => arr.some(b => (useCompare ? compare(a, b) : a === b))).distinct(compare);
}

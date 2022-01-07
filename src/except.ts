declare global {
  interface Array<T> {
    except(this: Array<T>, arr: Array<T>, compare?: (a: T, b: T) => boolean): T[];
  }
}

Array.prototype.except = except;

export function except<T>(this: T[], arr: T[], compare?: (a: T, b: T) => boolean) {
  const useCompare = !!compare;
  const same = this.intersect(arr, compare);
  return this.filter(a => same.every(b => (useCompare ? !compare(a, b) : a !== b))).distinct(compare);
}

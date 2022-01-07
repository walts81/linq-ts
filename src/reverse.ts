declare global {
  interface Array<T> {
    reverse(this: Array<T>): T[];
  }
}

Array.prototype.reverse = reverse;

export function reverse<T>(this: T[]): T[] {
  const results: T[] = [];
  const length = this.length;
  for (let i = length - 1; i >= 0; i--) {
    results.push(this[i]);
  }
  return results;
}

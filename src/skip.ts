declare global {
  interface Array<T> {
    skip(this: Array<T>, count: number): T[];
  }
}

Array.prototype.skip = skip;

export function skip<T>(this: T[], count: number) {
  return this.slice(count, this.length);
}

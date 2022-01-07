declare global {
  interface Array<T> {
    take(this: Array<T>, count: number): T[];
  }
}

Array.prototype.take = take;

export function take<T>(this: T[], count: number) {
  return this.slice(0, count);
}

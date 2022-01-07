declare global {
  interface Array<T> {
    select<TResult>(this: Array<T>, expression: (item: T, index?: number) => TResult): TResult[];
  }
}

Array.prototype.select = select;

export function select<T, TResult>(this: T[], expression: (item: T, index?: number) => TResult): TResult[] {
  const result: TResult[] = [];
  const length = this.length;
  for (let i = 0; i < length; i++) {
    result.push(expression(this[i], i));
  }
  return result;
}

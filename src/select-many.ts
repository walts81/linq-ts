declare global {
  interface Array<T> {
    selectMany<TResult>(this: Array<T>, expression: (item: T, index?: number) => TResult[]): TResult[];
  }
}

Array.prototype.selectMany = selectMany;

export function selectMany<T, TResult>(this: T[], expression: (item: T, index?: number) => TResult[]): TResult[] {
  return this.reduce((prev: any[], current: any, ix: number) => prev.concat(expression(current, ix)), []);
}

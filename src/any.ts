declare global {
  interface Array<T> {
    any(this: Array<T>, expression?: (item: T, index?: number) => boolean): boolean;
  }
}

Array.prototype.any = any;

export function any<T>(this: T[], expression?: (item: T, index?: number) => boolean): boolean {
  if (!expression) return this.length > 0;
  return this.some((x, i) => expression(x, i));
}

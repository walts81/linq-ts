declare global {
  interface Array<T> {
    removeAll(this: Array<T>, expression?: (item: T, index?: number) => boolean, mutateArray?: boolean): T[];
  }
}

Array.prototype.removeAll = removeAll;

export function removeAll<T>(this: T[], expression?: (item: T, index?: number) => boolean, mutateArray = false) {
  if (!expression) {
    if (!mutateArray) return [];
    this.splice(0, this.length);
    return this;
  }

  if (!mutateArray) return this.filter((x, i) => !expression(x, i));

  this.filter(expression).forEach(x => this.remove(x, true));
  return this;
}

declare global {
  interface Array<T> {
    removeAt(this: Array<T>, index: number, mutateArray?: boolean): T[];
  }
}

Array.prototype.removeAt = removeAt;

export function removeAt<T>(this: T[], index: number, mutateArray = false) {
  return this.remove(this[index], mutateArray);
}

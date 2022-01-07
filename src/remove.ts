declare global {
  interface Array<T> {
    remove(this: Array<T>, item: T, mutateArray?: boolean): T[];
  }
}

Array.prototype.remove = remove;

export function remove<T>(this: T[], item: T, mutateArray = false) {
  const arr = mutateArray ? this : ([] as T[]).concat(this);
  const i = arr.indexOf(item);
  if (i > -1) {
    arr.splice(i, 1);
  }
  return arr;
}

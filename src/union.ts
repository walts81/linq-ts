declare global {
  interface Array<T> {
    union(this: Array<T>, item: T): T[];
    union(this: Array<T>, arr: T[]): T[];
  }
}

Array.prototype.union = union;

function union<T>(this: T[], item: T): T[];
function union<T>(this: T[], arr: T[]): T[];
function union<T>(this: T[], arrayOrItem: T | T[]): T[] {
  return this.concat(arrayOrItem);
}

export { union };

/* tslint:disable:max-classes-per-file */
export class LinqException extends Error {
  constructor(readonly name: string, readonly message: string) {
    super(message);
  }
}

export class NoMatchException extends LinqException {
  constructor() {
    super('NoMatchException', 'No match found');
  }
}

export class EmptyArrayException extends LinqException {
  constructor() {
    super('EmptyArrayException', 'The array is empty');
  }
}

export class MultipleMatchException extends LinqException {
  constructor() {
    super('MultipleMatchException', 'Multiple matches found');
  }
}

const dupeKeyMsg = 'Key already exists';
export class DuplicateKeyException extends LinqException {
  constructor(key?: string) {
    super('DuplicateKeyException', !!key ? `${dupeKeyMsg} (key: ${key})` : dupeKeyMsg);
  }
}

export type Comparer<T = any> = (a: T, b: T) => number;
export const DefaultComparer: Comparer = (a, b) => (a > b ? 1 : a === b ? 0 : -1);

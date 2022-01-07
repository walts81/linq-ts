declare global {
  interface Array<T> {
    sum(this: Array<T>, expression?: (item: T, index?: number) => number): number;
  }
}

Array.prototype.sum = sum;

const getSafeNumber = (val: any) => {
  if (!val) return 0;

  const numVal = Number(val);
  return isNaN(numVal) ? 0 : numVal;
};

export function sum<T>(this: T[], expression: (item: T, index?: number) => number | T = x => x): number {
  let amount = 0;
  const length = this.length;
  for (let i = 0; i < length; i++) {
    amount += getSafeNumber(expression(this[i], i));
  }
  return amount;
}

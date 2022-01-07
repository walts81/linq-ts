declare global {
  interface Array<T> {
    getPageCount(this: Array<T>, pageSize: number): number;
  }
}

Array.prototype.getPageCount = getPageCount;

export const calculatePageCount = (total: number, pageSize: number) => {
  const x = total;
  const y = pageSize;
  let totalPages = Math.floor(x / y);
  if (x % y > 0) {
    totalPages++;
  }
  return totalPages || 1;
};

export function getPageCount<T>(this: T[], pageSize: number): number {
  return calculatePageCount(this.length, pageSize);
}

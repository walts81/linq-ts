declare global {
  interface Array<T> {
    getPage(this: Array<T>, page: number, pageSize: number): T[];
  }
}

Array.prototype.getPage = getPage;

export function getPage<T>(this: T[], page: number, pageSize: number): T[] {
  const pageSizeToUse = Math.min(pageSize, this.length);
  const maxPage = this.getPageCount(pageSizeToUse);
  if (page > maxPage) {
    page = maxPage;
  } else if (page <= 0) {
    page = 1;
  }
  const index = page - 1;
  return ([] as any[]).concat(this).slice(index * pageSizeToUse, page * pageSizeToUse);
}

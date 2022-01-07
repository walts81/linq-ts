import { getValueAsString } from './get-value-as-string';

declare global {
  interface GroupedItems<T, TKey> {
    key: TKey;
    items: T[];
  }

  interface Array<T> {
    groupBy<TKey>(this: Array<T>, expression: (item: T, index?: number) => TKey): GroupedItems<T, TKey>[];
  }
}

Array.prototype.groupBy = groupBy;

export function groupBy<T, TKey>(this: T[], expression: (item: T, index?: number) => TKey): GroupedItems<T, TKey>[] {
  return this.reduce(
    (prev, current, i) => {
      const tempKey = expression(current, i);
      const key = getValueAsString(tempKey);
      if (!prev.groups[key]) {
        const group = { key: tempKey, items: [] };
        prev.groups[key] = group;
        prev.results.push(group);
      }
      prev.groups[key].items.push(current);
      return prev;
    },
    { groups: {}, results: [] as any[] }
  ).results;
}

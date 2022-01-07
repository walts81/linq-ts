export const getValueAsString = <T>(val: T, nullOrUndefinedAsBlank = true) => {
  if ((!!val && typeof val === 'string') || (val as any) === '') return val as any as string;
  if (nullOrUndefinedAsBlank && !val && (val as any) !== 0) return '';
  if (!nullOrUndefinedAsBlank && val === null) return 'null';
  if (!nullOrUndefinedAsBlank && val === undefined) return 'undefined';
  if (typeof val === 'object') return JSON.stringify(val);
  return (val as any).toString();
};

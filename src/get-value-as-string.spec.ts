import { expect } from 'chai';
import 'mocha';
import { getValueAsString } from './get-value-as-string';

describe('getValueAsString', () => {
  it('should return null as empty string by default', () => {
    const result = getValueAsString(null);
    expect(result).to.eq('');
  });
  it('should return null as "null" when specified', () => {
    const result = getValueAsString(null, false);
    expect(result).to.eq('null');
  });
  it('should return undefined as empty string by default', () => {
    const result = getValueAsString(undefined);
    expect(result).to.eq('');
  });
  it('should return undefined as "undefined" when specified', () => {
    const result = getValueAsString(undefined, false);
    expect(result).to.eq('undefined');
  });
});

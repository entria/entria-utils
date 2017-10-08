// @flow
import * as Arrays from './Arrays';
import * as Objects from './Objects';
import * as Strings from './Strings';

export const isEmpty = (value: any) => {
  if (typeof value === 'undefined' || value === null) {
    return true;
  }

  if (Array.isArray(value)) {
    return Arrays.isEmpty(value);
  }

  if (typeof value === 'object') {
    return Objects.isEmpty(value);
  }

  if (typeof value === 'string') {
    return Strings.isEmpty(value);
  }

  return false;
};

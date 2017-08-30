// @flow

import Mask from 'string-mask';

export default function(value: ?string, format: ?string): string {
  return new Mask(format).apply(value);
}

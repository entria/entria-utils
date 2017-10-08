import { setupTest } from '../../../test/utils';
import * as Arrays from '../Arrays';

beforeEach(async () => setupTest());

it('isEmpty - should return true if null', () => {
  expect(Arrays.isEmpty(null)).toMatchSnapshot();
});

it('isEmpty - should return true if undefined', () => {
  expect(Arrays.isEmpty(undefined)).toMatchSnapshot();
});

it('isEmpty - should return true if empty', () => {
  expect(Arrays.isEmpty([])).toMatchSnapshot();
});

it('isEmpty - should return false if filled', () => {
  const value = ['john', 'doe'];
  expect(Arrays.isEmpty(value)).toMatchSnapshot();
});

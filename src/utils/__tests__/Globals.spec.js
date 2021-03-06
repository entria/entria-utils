import { setupTest } from '../../../test/utils';
import { isEmpty } from '../Globals';

beforeEach(async () => setupTest());

it('isEmpty - should return true if null', () => {
  expect(isEmpty(null)).toMatchSnapshot();
});

it('isEmpty - should return true if undefined', () => {
  expect(isEmpty(undefined)).toMatchSnapshot();
});

it('isEmpty - should return true if invalid date', () => {
  expect(isEmpty(new Date('invalid date'))).toMatchSnapshot();
});

it('isEmpty - should return false if valid date', () => {
  expect(isEmpty(new Date())).toMatchSnapshot();
});

it('isEmpty - should return true if empty array', () => {
  expect(isEmpty([])).toMatchSnapshot();
});

it('isEmpty - should return false if filled array', () => {
  const value = ['john', 'doe'];
  expect(isEmpty(value)).toMatchSnapshot();
});

it('isEmpty - should return true if empty object', () => {
  expect(isEmpty({})).toMatchSnapshot();
});

it('isEmpty - should return false if filled object', () => {
  const value = { me: { john: 'doe' } };
  expect(isEmpty(value)).toMatchSnapshot();
});

it('isEmpty - should return true if empty string', () => {
  expect(isEmpty('')).toMatchSnapshot();
});

it('isEmpty - should return false if filled string', () => {
  expect(isEmpty('john')).toMatchSnapshot();
});

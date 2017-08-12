import * as Strings from '../Strings';

it('isEmpty - should return true if null', () => {
  expect(Strings.isEmpty(null)).toMatchSnapshot();
});

it('isEmpty - should return true if undefined', () => {
  expect(Strings.isEmpty(undefined)).toMatchSnapshot();
});

it('isEmpty - should return true if empty string', () => {
  expect(Strings.isEmpty('')).toMatchSnapshot();
});

it('isEmpty - should return false if filled', () => {
  expect(Strings.isEmpty('awesome')).toMatchSnapshot();
});

it('isEmpty - should return false if 0', () => {
  expect(Strings.isEmpty('0')).toMatchSnapshot();
});

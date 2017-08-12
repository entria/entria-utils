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

it('isAlpha - should return true if valid', () => {
  expect(Strings.isAlpha('Fábio Assunção')).toMatchSnapshot();
});

it('isAlpha - should return false if invalid', () => {
  expect(Strings.isAlpha('Fábio Assunção #@*&')).toMatchSnapshot();
});

it('isEmail - should return true if valid', () => {
  expect(Strings.isEmail('john@doe.com')).toMatchSnapshot();
});

it('isEmail - should return false if invalid', () => {
  expect(Strings.isEmail('fake@d.c.b')).toMatchSnapshot();
});

it('uppercaseFirstLetter', () => {
  expect(Strings.uppercaseFirstLetter('barney stinson')).toMatchSnapshot();
});

it('capitalize', () => {
  expect(Strings.capitalize('barney stinson')).toMatchSnapshot();
});

it('numbers', () => {
  expect(Strings.numbers('1, 2, 3, Un pasito p\' adelante. 1, 2, 3, Un pasito p\' atrás.')).toMatchSnapshot();
});

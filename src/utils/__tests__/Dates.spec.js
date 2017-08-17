import { setupTest } from '../../../test/utils';
import * as Dates from '../Dates';
import * as Locale from '../Locale';

beforeEach(async () => setupTest());

it('extract - Locale.GENERAL', () => {
  Locale.set(Locale.GENERAL);
  expect(Dates.extract('2000-01-01')).toMatchSnapshot();
});

it('extract - Locale.BRAZIL', () => {
  Locale.set(Locale.BRAZIL);
  expect(Dates.extract('01/01/2000')).toMatchSnapshot();
});

it('parse - Locale.GENERAL string', () => {
  Locale.set(Locale.GENERAL);
  expect(Dates.parse('2000-01-01')).toMatchSnapshot();
});

it('parse - Locale.BRAZIL string', () => {
  Locale.set(Locale.BRAZIL);
  expect(Dates.parse('01/01/2000')).toMatchSnapshot();
});

it('parse - another date', () => {
  expect(Dates.parse(new Date('01/01/2000'))).toMatchSnapshot();
});

it('isValid - valid date', () => {
  expect(Dates.isValid('2000-01-01')).toMatchSnapshot();
});

it('isValid - invalid date', () => {
  expect(Dates.isValid('2000-01-35')).toMatchSnapshot();
});

it('isValid - valid leap date', () => {
  expect(Dates.isValid('2000-02-29')).toMatchSnapshot();
});

it('isValid - invalid leap date', () => {
  expect(Dates.isValid('2001-02-29')).toMatchSnapshot();
});

it('isFuture - future date', () => {
  expect(Dates.isFuture('2050-01-01')).toMatchSnapshot();
});

it('isFuture - past date', () => {
  expect(Dates.isFuture('2000-01-01')).toMatchSnapshot();
});

it('isPast - past date', () => {
  expect(Dates.isPast('2000-01-01')).toMatchSnapshot();
});

it('isPast - future date', () => {
  expect(Dates.isPast('2050-01-01')).toMatchSnapshot();
});

it('compare - left date greater', () => {
  expect(Dates.compare('2010-01-01', '2000-01-01')).toMatchSnapshot();
});

it('compare - right date greater', () => {
  expect(Dates.compare('2000-01-01', '2010-01-01')).toMatchSnapshot();
});

it('compare - same dates', () => {
  expect(Dates.compare('2000-01-01', '2000-01-01')).toMatchSnapshot();
});

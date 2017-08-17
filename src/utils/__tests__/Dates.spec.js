import { setupTest } from '../../../test/utils';
import * as Dates from '../Dates';
import * as Locale from '../Locale';

beforeEach(async () => setupTest());

const brazilConfig = {
  locale: Locale.BRAZIL,
};

it('extract', () => {
  expect(Dates.extract('2000-01-01')).toMatchSnapshot();
});

it('extract - Locale.BRAZIL', () => {
  expect(Dates.extract('01/01/2000', brazilConfig)).toMatchSnapshot();
});

it('parse', () => {
  expect(Dates.parse('2000-01-01')).toMatchSnapshot();
});

it('parse - Locale.BRAZIL', () => {
  expect(Dates.parse('01/01/2000', brazilConfig)).toMatchSnapshot();
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

it('isValid - Locale.BRAZIL - valid date', () => {
  expect(Dates.isValid('01/01/2000', brazilConfig)).toMatchSnapshot();
});

it('isValid - Locale.BRAZIL - invalid date', () => {
  expect(Dates.isValid('35/01/2000', brazilConfig)).toMatchSnapshot();
});

it('isValid - Locale.BRAZIL - valid leap date', () => {
  expect(Dates.isValid('29/02/2000', brazilConfig)).toMatchSnapshot();
});

it('isValid - Locale.BRAZIL - invalid leap date', () => {
  expect(Dates.isValid('29/02/2001', brazilConfig)).toMatchSnapshot();
});

it('isFuture - future date', () => {
  expect(Dates.isFuture('2050-01-01')).toMatchSnapshot();
});

it('isFuture - past date', () => {
  expect(Dates.isFuture('2000-01-01')).toMatchSnapshot();
});

it('isFuture - Locale.BRAZIL - future date', () => {
  expect(Dates.isFuture('01/01/2050', brazilConfig)).toMatchSnapshot();
});

it('isFuture - Locale.BRAZIL - past date', () => {
  expect(Dates.isFuture('01/01/2000', brazilConfig)).toMatchSnapshot();
});

it('isPast - past date', () => {
  expect(Dates.isPast('2000-01-01')).toMatchSnapshot();
});

it('isPast - future date', () => {
  expect(Dates.isPast('2050-01-01')).toMatchSnapshot();
});

it('isPast - Locale.BRAZIL - past date', () => {
  expect(Dates.isPast('01/01/2000', brazilConfig)).toMatchSnapshot();
});

it('isPast - Locale.BRAZIL - future date', () => {
  expect(Dates.isPast('01/01/2050', brazilConfig)).toMatchSnapshot();
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

it('compare - Locale.BRAZIL - left date greater', () => {
  expect(Dates.compare('01/01/2010', '01/01/2000', brazilConfig)).toMatchSnapshot();
});

it('compare - Locale.BRAZIL - right date greater', () => {
  expect(Dates.compare('01/01/2000', '01/01/2010', brazilConfig)).toMatchSnapshot();
});

it('compare - Locale.BRAZIL - same dates', () => {
  expect(Dates.compare('01/01/2000', '01/01/2000', brazilConfig)).toMatchSnapshot();
});

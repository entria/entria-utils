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

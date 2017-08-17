import { setupTest } from '../../../test/utils';
import * as Locale from '../Locale';

beforeEach(async () => setupTest());

it('set - no props', () => {
  Locale.set();
  expect(Locale.get()).toMatchSnapshot();
});

it('set - brazil', () => {
  Locale.set(Locale.BRAZIL);
  expect(Locale.get()).toMatchSnapshot();
});

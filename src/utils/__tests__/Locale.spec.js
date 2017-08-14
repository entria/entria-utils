import * as Locale from '../Locale';

it('set - no props', () => {
  Locale.set();
  expect(Locale.get()).toMatchSnapshot();
});

it('set - brazil', () => {
  Locale.set(Locale.BRAZIL);
  expect(Locale.get()).toMatchSnapshot();
});

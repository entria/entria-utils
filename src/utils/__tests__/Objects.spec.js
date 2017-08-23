import { setupTest } from '../../../test/utils';
import * as Objects from '../Objects';

beforeEach(async () => setupTest());

it('concat - should return an empty object', () => {
  const objectOne = {};
  const objectTwo = {};

  expect(Objects.concat(objectOne, objectTwo)).toMatchSnapshot();
});

it('concat - should return objectOne', () => {
  const objectOne = { john: 'doe' };
  const objectTwo = {};

  expect(Objects.concat(objectOne, objectTwo)).toMatchSnapshot();
});

it('concat - should return objectTwo', () => {
  const objectOne = {};
  const objectTwo = { jane: 'doe' };

  expect(Objects.concat(objectOne, objectTwo)).toMatchSnapshot();
});

it('concat - should concat', () => {
  const objectOne = { john: 'doe' };
  const objectTwo = { jane: 'doe' };

  expect(Objects.concat(objectOne, objectTwo)).toMatchSnapshot();
});

it('concat - should override', () => {
  const objectOne = { john: 'doe' };
  const objectTwo = { john: 'doe awesome' };

  expect(Objects.concat(objectOne, objectTwo)).toMatchSnapshot();
});

it('concat - should deep concat', () => {
  const objectOne = { me: { john: 'doe' } };
  const objectTwo = { wife: { jane: 'doe' } };

  expect(Objects.concat(objectOne, objectTwo)).toMatchSnapshot();
});

it('concat - should deep override', () => {
  const objectOne = { me: { john: 'doe' } };
  const objectTwo = { me: { john: 'doe awesome' } };

  expect(Objects.concat(objectOne, objectTwo)).toMatchSnapshot();
});

it('clear - should return an empty object', () => {
  expect(Objects.clear({})).toMatchSnapshot();
});

it('clear - should clear the object', () => {
  expect(Objects.clear({
    john: 'doe',
    me: null,
    wife: {},
    children: [],
    role: '',
  })).toMatchSnapshot();
});

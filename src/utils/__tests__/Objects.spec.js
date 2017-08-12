import * as Objects from '../Objects';

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

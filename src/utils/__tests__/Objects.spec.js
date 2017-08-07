import * as Objects from '../Objects';

it('should return an empty object', () => {
  const objectOne = {};
  const objectTwo = {};

  expect(Objects.concat(objectOne, objectTwo)).toMatchSnapshot();
});

it('should return objectOne', () => {
  const objectOne = { john: 'doe' };
  const objectTwo = {};

  expect(Objects.concat(objectOne, objectTwo)).toMatchSnapshot();
});

it('should return objectTwo', () => {
  const objectOne = {};
  const objectTwo = { jane: 'doe' };

  expect(Objects.concat(objectOne, objectTwo)).toMatchSnapshot();
});

it('should concat', () => {
  const objectOne = { john: 'doe' };
  const objectTwo = { jane: 'doe' };

  expect(Objects.concat(objectOne, objectTwo)).toMatchSnapshot();
});

it('should override', () => {
  const objectOne = { john: 'doe' };
  const objectTwo = { john: 'doe awesome' };

  expect(Objects.concat(objectOne, objectTwo)).toMatchSnapshot();
});


it('should deep concat', () => {
  const objectOne = { me: { john: 'doe' } };
  const objectTwo = { wife: { jane: 'doe' } };

  expect(Objects.concat(objectOne, objectTwo)).toMatchSnapshot();
});

it('should deep override', () => {
  const objectOne = { me: { john: 'doe' } };
  const objectTwo = { me: { john: 'doe awesome' } };

  expect(Objects.concat(objectOne, objectTwo)).toMatchSnapshot();
});

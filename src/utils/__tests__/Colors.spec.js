import * as Colors from '../Colors';

it('hexToRGBObject', () => {
  expect(Colors.hexToRGBObject('#ffffff')).toMatchSnapshot();
});

it('hexToRGBObject - bad hex', () => {
  expect(Colors.hexToRGBObject('#fff')).toThrowErrorMatchingSnapshot();
});

it('hexToRGB', () => {
  expect(Colors.hexToRGB('#ffffff')).toMatchSnapshot();
});

it('hexToRGBA - without alpha', () => {
  expect(Colors.hexToRGBA('#ffffff')).toMatchSnapshot();
});

it('hexToRGBA - with alpha', () => {
  expect(Colors.hexToRGBA('#ffffff', 0.5)).toMatchSnapshot();
});

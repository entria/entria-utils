import { setupTest } from '../../../test/utils';
import * as Colors from '../Colors';

beforeEach(async () => setupTest());

it('hexToRGBObject', () => {
  expect(Colors.hexToRGBObject('#ffffff')).toMatchSnapshot();
});

it('hexToRGBObject - bad hex', () => {
  function testHexToRGBObject() {
    Colors.hexToRGBObject('#fff');
  }

  expect(testHexToRGBObject).toThrowErrorMatchingSnapshot();
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

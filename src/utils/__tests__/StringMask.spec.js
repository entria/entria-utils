import StringMask from '../StringMask';

import { setupTest } from '../../../test/utils';

beforeEach(async () => setupTest());

it('should format string for CPF mask', () => {
  expect(StringMask('99999999999', '000.000.000-00')).toMatchSnapshot();
});

it('should only format 6 characters of the CPF mask', () => {
  expect(StringMask('999999', '000.000.000-00')).toMatchSnapshot();
});

it('should format string for CEP mask', () => {
  expect(StringMask('99999999', '00000-000')).toMatchSnapshot();
});

it('should format string for CNPJ mask', () => {
  expect(StringMask('99999999999999', '00.000.000/0000-00')).toMatchSnapshot();
});

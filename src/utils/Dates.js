// @flow
import * as Locale from './Locale';

type ExtractedDate = {
  day: string,
  month: string,
  year: string,
};
export function extract(value: string): ExtractedDate {
  const locale = Locale.get();

  // brazil = dd/mm/yyyy
  if (locale === Locale.BRAZIL) {
    return {
      day: value.substr(0, 2),
      month: value.substr(3, 2),
      year: value.substr(6, 4),
    };
  }

  // general = yyyy-mm-dd
  return {
    day: value.substr(7, 2),
    month: value.substr(5, 2),
    year: value.substr(0, 4),
  };
}

export function parse(value) {
  if (value && typeof value === 'string') {
    const { day, month, year } = extract(value);
    return new Date(year, parseInt(month) - 1, day);
  }

  return new Date(value);
}
